import { FOUNDER, SITE, SITE_URL } from '~/config/site';

export type BreadcrumbItem = { name: string; url: string };

export const absoluteUrl = (path: string): string => {
  if (path.startsWith('http')) return path;
  return new URL(path, SITE_URL).toString();
};

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': absoluteUrl('/#organization'),
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE_URL,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  founder: { '@id': absoluteUrl('/#kasra-dash') },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.addressCountry,
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
});

export const buildFounderSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': absoluteUrl('/#kasra-dash'),
  name: FOUNDER.name,
  givenName: FOUNDER.givenName,
  familyName: FOUNDER.familyName,
  jobTitle: FOUNDER.role,
  description: FOUNDER.shortBio,
  worksFor: { '@id': absoluteUrl('/#organization') },
  knowsAbout: [...FOUNDER.expertise],
  url: FOUNDER.channels.website,
  sameAs: [
    FOUNDER.channels.youtube,
    FOUNDER.channels.twitter,
    FOUNDER.channels.linkedin,
    FOUNDER.channels.website,
  ],
});

export const buildWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: SITE_URL,
  name: SITE.name,
  publisher: { '@id': absoluteUrl('/#organization') },
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const buildServiceSchema = (params: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: params.name,
  description: params.description,
  url: absoluteUrl(params.url),
  provider: { '@id': absoluteUrl('/#organization') },
  ...(params.areaServed
    ? { areaServed: { '@type': 'Place', name: params.areaServed } }
    : {}),
});

export const buildFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const buildArticleSchema = (params: {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date;
  author?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: params.title,
  description: params.description,
  url: absoluteUrl(params.url),
  datePublished: params.datePublished.toISOString(),
  dateModified: (params.dateModified ?? params.datePublished).toISOString(),
  author: { '@type': 'Person', name: params.author ?? SITE.name },
  publisher: { '@id': absoluteUrl('/#organization') },
  ...(params.image ? { image: absoluteUrl(params.image) } : {}),
});
