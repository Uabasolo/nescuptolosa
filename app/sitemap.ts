import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nescup2026.com'; // PLACEHOLDER: Actualizar con dominio real

  // Rutas estáticas
  const routes = [
    '',
    '/equipos',
    '/calendario',
    '/logistica',
    '/normativa',
    '/faq',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
