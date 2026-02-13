import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nescup2026.com'; // PLACEHOLDER: Actualizar con dominio real

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Proteger rutas privadas si las hay
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
