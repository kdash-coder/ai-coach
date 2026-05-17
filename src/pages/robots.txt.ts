import type { APIRoute } from 'astro';
import { SITE_URL } from '~/config/site';

const sitemapUrl = new URL('/sitemap-index.xml', SITE_URL).toString();

const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
