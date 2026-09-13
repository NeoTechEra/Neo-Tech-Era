import { PageView } from '../types';
import { Language } from '../i18n/types';
import { enTranslations } from '../i18n/en';
import { arTranslations } from '../i18n/ar';

export const SITE_ORIGIN = 'https://neotechera.com';

export interface RouteDefinition {
  view: PageView;
  slug: string; // e.g. '' for home, 'the-nabaa', 'products/nabaa-tankers'
  aliases: string[];
  ogType: 'website' | 'article' | 'product';
}

export const ROUTE_DEFINITIONS: Record<PageView, RouteDefinition> = {
  'home': {
    view: 'home',
    slug: '',
    aliases: ['/', '/home', '/index.html', '/products'],
    ogType: 'website'
  },
  'nabaa-detail': {
    view: 'nabaa-detail',
    slug: 'the-nabaa',
    aliases: [
      'products/nabaa-tankers',
      'the-nabaa-tankers',
      'nabaa',
      'products/the-nabaa',
      'products/nabaa-tanker',
      'products/nabaa',
      'products/nabaa-detail'
    ],
    ogType: 'product'
  },
  'pix-shield-detail': {
    view: 'pix-shield-detail',
    slug: 'products/pix-shield',
    aliases: ['pix-shield', 'products/pix-shield-detail'],
    ogType: 'product'
  },
  'price-pulser-detail': {
    view: 'price-pulser-detail',
    slug: 'products/price-pulser',
    aliases: [
      'price-post-pulser',
      'price-pulser',
      'products/price-post-pulser',
      'products/price-pulser-detail'
    ],
    ogType: 'product'
  },
  'ecommerce-builder-detail': {
    view: 'ecommerce-builder-detail',
    slug: 'products/ecommerce-builder',
    aliases: [
      'ecommerce-builder',
      'ecommerce-post-builder',
      'products/ecommerce-post-builder',
      'products/ecommerce-builder-detail'
    ],
    ogType: 'product'
  },
  'about': {
    view: 'about',
    slug: 'about-us',
    aliases: [
      'about',
      'company',
      'who-we-are',
      'about-neo-tech-era'
    ],
    ogType: 'website'
  },
  'contact': {
    view: 'contact',
    slug: 'contact-us',
    aliases: [
      'contact',
      'get-in-touch',
      'inquiry',
      'contact-neo-tech-era'
    ],
    ogType: 'website'
  }
};

/**
 * Normalizes a URL path by removing trailing slashes, leading slashes, and converting to lowercase.
 */
export function normalizePath(rawPath: string): string {
  if (!rawPath) return '';
  let clean = rawPath.toLowerCase().split('?')[0].split('#')[0].trim();
  clean = clean.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean;
}

/**
 * Parses any incoming pathname into its Language, PageView, and optional section hash.
 */
export function matchPathToRoute(pathname: string): {
  view: PageView;
  lang: Language;
  targetSection?: string;
} {
  const normalized = normalizePath(pathname);

  // Determine language prefix
  let lang: Language = 'en';
  let restPath = normalized;

  if (normalized === 'ar' || normalized.startsWith('ar/')) {
    lang = 'ar';
    restPath = normalized === 'ar' ? '' : normalized.slice(3);
  } else if (normalized === 'en' || normalized.startsWith('en/')) {
    lang = 'en';
    restPath = normalized === 'en' ? '' : normalized.slice(3);
  }

  // Check for products special section route
  let targetSection: string | undefined;
  if (restPath === 'products') {
    return { view: 'home', lang, targetSection: 'products-overview' };
  }

  // Match against route definitions
  for (const [viewKey, def] of Object.entries(ROUTE_DEFINITIONS)) {
    const normSlug = normalizePath(def.slug);
    if (restPath === normSlug) {
      return { view: viewKey as PageView, lang };
    }
    if (def.aliases.some((alias) => normalizePath(alias) === restPath)) {
      return { view: viewKey as PageView, lang };
    }
  }

  return { view: 'home', lang };
}

/**
 * Resolves legacy or current pathname directly to PageView.
 */
export function matchPathToView(pathname: string): PageView {
  return matchPathToRoute(pathname).view;
}

/**
 * Gets canonical relative path with language prefix (e.g. /en/products/nabaa-tankers or /ar).
 */
export function getViewCanonicalPath(view: PageView, lang: Language = 'en'): string {
  const def = ROUTE_DEFINITIONS[view] || ROUTE_DEFINITIONS['home'];
  const slug = def.slug;
  if (!slug) {
    return `/${lang}`;
  }
  return `/${lang}/${slug}`;
}

/**
 * Gets absolute canonical URL.
 */
export function getViewFullCanonicalUrl(view: PageView, lang: Language = 'en'): string {
  const path = getViewCanonicalPath(view, lang);
  return `${SITE_ORIGIN}${path}`;
}

/**
 * Returns alternate URLs for hreflang tags.
 */
export function getAlternateUrls(view: PageView): {
  en: string;
  ar: string;
  xDefault: string;
} {
  const enUrl = getViewFullCanonicalUrl(view, 'en');
  const arUrl = getViewFullCanonicalUrl(view, 'ar');
  return {
    en: enUrl,
    ar: arUrl,
    xDefault: enUrl
  };
}

/**
 * Calculates the exact equivalent path for language switching while preserving page and hashes.
 */
export function getEquivalentPath(currentPath: string, targetLang: Language): string {
  const { view, targetSection } = matchPathToRoute(currentPath);
  let base = getViewCanonicalPath(view, targetLang);
  if (targetSection === 'products-overview') {
    base = `/${targetLang}/#products`;
  }
  return base;
}

/**
 * Breadcrumb names config for components
 */
export const ROUTES_CONFIG = {
  'home': {
    breadcrumbName: 'Home',
    path: '/en'
  },
  'nabaa-detail': {
    breadcrumbName: 'The Nabaa Tankers',
    path: '/en/the-nabaa'
  },
  'pix-shield-detail': {
    breadcrumbName: 'Pix Shield',
    path: '/en/products/pix-shield'
  },
  'price-pulser-detail': {
    breadcrumbName: 'Price Post Pulser',
    path: '/en/products/price-pulser'
  },
  'ecommerce-builder-detail': {
    breadcrumbName: 'E-Commerce Post Builder',
    path: '/en/products/ecommerce-builder'
  },
  'about': {
    breadcrumbName: 'About Us',
    path: '/en/about-us'
  },
  'contact': {
    breadcrumbName: 'Contact Us',
    path: '/en/contact-us'
  }
};

/**
 * Localized metadata content for SEO
 */
export function getRouteMeta(view: PageView, lang: Language) {
  const dict = lang === 'ar' ? arTranslations : enTranslations;
  
  switch (view) {
    case 'nabaa-detail':
      return {
        title: dict.seo.nabaa.title,
        description: dict.seo.nabaa.description,
        breadcrumbName: dict.seo.nabaa.breadcrumb,
        keywords: lang === 'ar' 
          ? ['The Nabaa Tankers', 'توصيل صهريج مياه', 'وايت ماء الرياض', 'تطبيق صهاريج مياه', 'توزيع المياه اللوجستي', 'صهريج 10 طن 19 طن 32 طن', 'Neo Tech Era']
          : ['The Nabaa Tanker', 'water tanker delivery', 'water tanker Riyadh', 'Saudi Arabia water delivery app', 'fleet logistics management', 'driver dispatch app', '10T 19T 32T water tanker', 'Neo Tech Era'],
        ogType: 'product' as const
      };
    case 'pix-shield-detail':
      return {
        title: dict.seo.pixShield.title,
        description: dict.seo.pixShield.description,
        breadcrumbName: dict.seo.pixShield.breadcrumb,
        keywords: lang === 'ar'
          ? ['Pix Shield', 'حماية الصور', 'إضافة علامات مائية', 'حماية الملكية الفكرية', 'علامة مائية مجمعة', 'Neo Tech Era']
          : ['Pix Shield', 'image watermarking tool', 'protect digital photos', 'batch image watermark', 'copyright stamp', 'Neo Tech Era'],
        ogType: 'product' as const
      };
    case 'price-pulser-detail':
      return {
        title: dict.seo.pricePulser.title,
        description: dict.seo.pricePulser.description,
        breadcrumbName: dict.seo.pricePulser.breadcrumb,
        keywords: lang === 'ar'
          ? ['Price Post Pulser', 'بطاقات تسعير إنستغرام', 'تصميم عروض أسعار', 'منشورات الأسعار', 'تسويق شبكات التواصل', 'Neo Tech Era']
          : ['Price Post Pulser', 'pricing card creator', 'social media price graphics', 'discount post generator', 'Instagram pricing card', 'Neo Tech Era'],
        ogType: 'product' as const
      };
    case 'ecommerce-builder-detail':
      return {
        title: dict.seo.ecommerceBuilder.title,
        description: dict.seo.ecommerceBuilder.description,
        breadcrumbName: dict.seo.ecommerceBuilder.breadcrumb,
        keywords: lang === 'ar'
          ? ['E-Commerce Post Builder', 'تصاميم متاجر إلكترونية', 'بانرات إعلانية', 'تسويق المتاجر', 'بطاقات منتجات', 'Neo Tech Era']
          : ['E-Commerce Post Builder', 'ecommerce product showcase', 'social shopping post creator', 'online store banner maker', 'retail visual marketing', 'Neo Tech Era'],
        ogType: 'product' as const
      };
    case 'about':
      return {
        title: dict.seo.about.title,
        description: dict.seo.about.description,
        breadcrumbName: dict.seo.about.breadcrumb,
        keywords: lang === 'ar'
          ? ['Neo Tech Era', 'من نحن', 'مختبرات برمجيات', 'The Nabaa Tankers', 'تطوير منصات رقمية', 'لوجستيات الأساطيل', 'تقنية الرياض السعودية']
          : ['About Neo Tech Era', 'Neo Tech Era Software Labs', 'digital platforms engineering', 'The Nabaa Tankers creators', 'Saudi Arabia software company', 'logistics telematics studio'],
        ogType: 'website' as const
      };
    case 'contact':
      return {
        title: dict.seo.contact.title,
        description: dict.seo.contact.description,
        breadcrumbName: dict.seo.contact.breadcrumb,
        keywords: lang === 'ar'
          ? ['اتصل بنا Neo Tech Era', 'تواصل مع Neo Tech Era', 'حجز عرض The Nabaa Tankers', 'استفسارات الأنظمة والشركات', 'دعم منصة النبع', 'بريد techeraneo@gmail.com']
          : ['Contact Neo Tech Era', 'get in touch Neo Tech Era', 'The Nabaa Tankers enterprise demo', 'logistics software inquiry', 'techeraneo@gmail.com', 'request consultation'],
        ogType: 'website' as const
      };
    case 'home':
    default:
      return {
        title: dict.seo.home.title,
        description: dict.seo.home.description,
        breadcrumbName: dict.seo.home.breadcrumb,
        keywords: lang === 'ar'
          ? ['Neo Tech Era', 'The Nabaa Tanker', 'منصة توصيل صهاريج المياه', 'Pix Shield', 'Price Post Pulser', 'E-Commerce Post Builder', 'حلول برمجية عملية']
          : ['The Nabaa Tanker', 'water delivery platform', 'water tanker logistics', 'Saudi Arabia water delivery', 'Pix Shield', 'Price Post Pulser', 'E-Commerce Post Builder', 'Neo Tech Era'],
        ogType: 'website' as const
      };
  }
}

/**
 * Builds Schema.org JSON-LD structured data for the page (SEO & AEO optimized).
 */
function buildSchemaJson(view: PageView, lang: Language) {
  const canonicalUrl = getViewFullCanonicalUrl(view, lang);
  const homeUrl = getViewFullCanonicalUrl('home', lang);
  const meta = getRouteMeta(view, lang);
  const dict = lang === 'ar' ? arTranslations : enTranslations;

  if (view === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${canonicalUrl}#website`,
          'url': canonicalUrl,
          'name': lang === 'ar' ? 'منظومة Neo Tech Era ومنصة The Nabaa Tankers' : 'The Nabaa Tanker & Neo Tech Era Suite',
          'description': meta.description,
          'inLanguage': lang === 'ar' ? 'ar' : 'en',
          'publisher': {
            '@type': 'Organization',
            'name': 'Neo Tech Era',
            'url': canonicalUrl,
            'email': 'techeraneo@gmail.com'
          }
        },
        {
          '@type': 'ItemList',
          '@id': `${canonicalUrl}#products`,
          'name': lang === 'ar' ? 'المنتجات الرقمية المميزة' : 'Featured Digital Products',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'The Nabaa Tankers',
              'url': getViewFullCanonicalUrl('nabaa-detail', lang)
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Pix Shield',
              'url': getViewFullCanonicalUrl('pix-shield-detail', lang)
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Price Post Pulser',
              'url': getViewFullCanonicalUrl('price-pulser-detail', lang)
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': 'E-Commerce Post Builder',
              'url': getViewFullCanonicalUrl('ecommerce-builder-detail', lang)
            }
          ]
        }
      ]
    };
  }

  // About Us Page (AEO & SEO optimized with Organization, AboutPage & FAQPage schema)
  if (view === 'about') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${canonicalUrl}#aboutpage`,
          'url': canonicalUrl,
          'name': meta.title,
          'description': meta.description,
          'inLanguage': lang === 'ar' ? 'ar' : 'en',
          'mainEntity': {
            '@type': 'Organization',
            '@id': `${homeUrl}#organization`,
            'name': 'Neo Tech Era',
            'alternateName': 'Neo Tech Era Software Labs',
            'url': homeUrl,
            'email': 'techeraneo@gmail.com',
            'description': dict.aboutPage.quickAnswer,
            'knowsAbout': [
              'On-demand water tanker delivery logistics',
              'Fleet telematics and dispatch algorithms',
              'Image protection and batch watermarking technology',
              'Dynamic pricing graphic generators for social media',
              'E-commerce marketing banner automation'
            ],
            'makesOffer': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'SoftwareApplication',
                  'name': 'The Nabaa Tankers',
                  'url': getViewFullCanonicalUrl('nabaa-detail', lang)
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'SoftwareApplication',
                  'name': 'Pix Shield',
                  'url': getViewFullCanonicalUrl('pix-shield-detail', lang)
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'SoftwareApplication',
                  'name': 'Price Post Pulser',
                  'url': getViewFullCanonicalUrl('price-pulser-detail', lang)
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'SoftwareApplication',
                  'name': 'E-Commerce Post Builder',
                  'url': getViewFullCanonicalUrl('ecommerce-builder-detail', lang)
                }
              }
            ]
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': lang === 'ar' ? 'الرئيسية' : 'Home',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': meta.breadcrumbName,
              'item': canonicalUrl
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          'mainEntity': dict.aboutPage.faqs.map((f) => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': f.a
            }
          }))
        }
      ]
    };
  }

  // Contact Us Page (AEO & SEO optimized with ContactPage, ContactPoint & FAQPage schema)
  if (view === 'contact') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${canonicalUrl}#contactpage`,
          'url': canonicalUrl,
          'name': meta.title,
          'description': meta.description,
          'inLanguage': lang === 'ar' ? 'ar' : 'en',
          'mainEntity': {
            '@type': 'Organization',
            '@id': `${homeUrl}#organization`,
            'name': 'Neo Tech Era',
            'url': homeUrl,
            'contactPoint': [
              {
                '@type': 'ContactPoint',
                'contactType': 'customer support and enterprise sales',
                'email': 'techeraneo@gmail.com',
                'availableLanguage': ['en', 'ar'],
                'hoursAvailable': 'Mo-Su 08:00-20:00',
                'areaServed': ['SA', 'AE', 'KW', 'BH', 'QA', 'OM', 'Worldwide']
              }
            ]
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': lang === 'ar' ? 'الرئيسية' : 'Home',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': meta.breadcrumbName,
              'item': canonicalUrl
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          'mainEntity': dict.contactPage.faqs.map((f) => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': f.a
            }
          }))
        }
      ]
    };
  }

  // Product detail pages
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${canonicalUrl}#software`,
        'name': meta.breadcrumbName,
        'applicationCategory': view === 'nabaa-detail' ? 'LogisticsApplication' : 'BusinessApplication',
        'operatingSystem': view === 'nabaa-detail' ? 'Web, iOS, Android' : 'Web Browser',
        'description': meta.description,
        'inLanguage': lang === 'ar' ? 'ar' : 'en',
        'offers': view === 'nabaa-detail' ? {
          '@type': 'AggregateOffer',
          'priceCurrency': 'SAR',
          'lowPrice': 120,
          'highPrice': 320,
          'offerCount': 3
        } : undefined
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': lang === 'ar' ? 'الرئيسية' : 'Home',
            'item': homeUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': lang === 'ar' ? 'المنتجات' : 'Products',
            'item': `${homeUrl}/#products`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': meta.breadcrumbName,
            'item': canonicalUrl
          }
        ]
      }
    ]
  };
}

/**
 * Dynamically updates document metadata (title, meta description, og tags, canonical link, hreflang tags, and JSON-LD schema).
 */
export function updateDocumentSEO(view: PageView, lang: Language = 'en'): void {
  if (typeof document === 'undefined') return;

  const meta = getRouteMeta(view, lang);
  const canonicalUrl = getViewFullCanonicalUrl(view, lang);
  const alternates = getAlternateUrls(view);

  // 1. Document Title
  document.title = meta.title;

  // 2. Helper to set or create meta tag
  const setMeta = (attributeName: string, attributeValue: string, content: string) => {
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // 3. Standard & Search Engine Meta Tags
  setMeta('name', 'description', meta.description);
  setMeta('name', 'keywords', meta.keywords.join(', '));
  setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // 4. Open Graph Meta Tags
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', meta.ogType);
  setMeta('property', 'og:site_name', 'Neo Tech Era');
  setMeta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US');

  // 5. Twitter Card Meta Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);

  // 6. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 7. Hreflang Alternates (en, ar, x-default)
  const setHreflang = (hreflang: string, href: string) => {
    let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  };

  setHreflang('en', alternates.en);
  setHreflang('ar', alternates.ar);
  setHreflang('x-default', alternates.xDefault);

  // 8. Structured Data (JSON-LD) for SEO & AEO
  let scriptTag = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'schema-json-ld';
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  const schema = buildSchemaJson(view, lang);
  scriptTag.textContent = JSON.stringify(schema, null, 2);
}
