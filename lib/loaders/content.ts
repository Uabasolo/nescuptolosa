import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface MDXContent {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    keywords?: string[];
    [key: string]: any;
  };
}

/**
 * Carga un archivo MDX por idioma y slug
 * @param locale - Idioma (es, eu)
 * @param slug - Nombre del archivo sin extensión (home, about, logistics, rules)
 */
export async function loadMDXContent(
  locale: string,
  slug: string
): Promise<MDXContent> {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      content,
      frontmatter: data as MDXContent['frontmatter'],
    };
  } catch (error) {
    console.error(`Error loading MDX content (${locale}/${slug}):`, error);
    throw new Error(`Failed to load content: ${locale}/${slug}`);
  }
}

/**
 * Obtiene todos los slugs de contenido disponibles para un idioma
 */
export async function getAvailableContentSlugs(locale: string): Promise<string[]> {
  const contentDir = path.join(CONTENT_DIR, locale);
  
  try {
    const files = fs.readdirSync(contentDir);
    return files
      .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
      .map(file => file.replace(/\.(mdx|md)$/, ''));
  } catch (error) {
    console.error(`Error reading content directory for ${locale}:`, error);
    return [];
  }
}

/**
 * Verifica si existe un contenido específico
 */
export async function contentExists(locale: string, slug: string): Promise<boolean> {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  return fs.existsSync(filePath);
}
