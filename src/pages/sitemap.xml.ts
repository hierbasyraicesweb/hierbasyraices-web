import type { APIRoute } from 'astro';
import { supabase } from '../lib/supabase';

const SITE_URL = 'https://hierbasyraices.com';

export const GET: APIRoute = async () => {
  const urls: string[] = [];

  // Páginas estáticas
  urls.push(SITE_URL + '/');
  urls.push(SITE_URL + '/blog/');
  urls.push(SITE_URL + '/tienda/');

  // Obtener todas las plantas de la base de datos
  const { data: plants, error: plantsError } = await supabase
    .from('plants')
    .select('id');

  if (plantsError) {
    console.error('Error al obtener plantas:', plantsError);
  } else if (plants) {
    plants.forEach((plant: { id: number }) => {
      urls.push(`${SITE_URL}/planta/${plant.id}`);
    });
  }

  // Obtener todos los artículos de blog
  const { data: posts, error: postsError } = await supabase
    .from('blog_posts')
    .select('slug');

  if (postsError) {
    console.error('Error al obtener posts:', postsError);
  } else if (posts) {
    posts.forEach((post: { slug: string }) => {
      urls.push(`${SITE_URL}/blog/${post.slug}`);
    });
  }

  // Generar el XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};