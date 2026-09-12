import { PageView } from '../types';

export interface RouteMeta {
  view: PageView;
  path: string;
  aliases: string[];
  title: string;
  description: string;
  keywords: string[];
  ogType: 'website' | 'article' | 'product';
  breadcrumbName: string;
  schema: Record<string, unknown>;
}

export const ROUTES_CONFIG: Record<PageView, RouteMeta> = {
  'home': {
    view: 'home',
    path: '/',
    aliases: ['/home', '/index.html'],
    title: 'Neo Tech Era | The Nabaa Tanker & Practical Digital Products Suite',
    description: 'Explore practical software solutions by Neo Tech Era. Featuring our flagship water delivery platform The Nabaa Tankers, Pix Shield, Price Post Pulser, and E-Commerce Post Builder.',
    keywords: [
      'The Nabaa Tanker',
      'water delivery platform',
      'water tanker logistics',
      'Saudi Arabia water delivery',
      'Pix Shield',
      'image watermarking tool',
      'Price Post Pulser',
      'pricing social post creator',
      'E-Commerce Post Builder',
      'Neo Tech Era'
    ],
    ogType: 'website',
    breadcrumbName: 'Home',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://neotechera.netlify.app/#website',
          'url': 'https://neotechera.netlify.app/',
          'name': 'The Nabaa Tanker & Neo Tech Era Suite',
          'description': 'Flagship on-demand water delivery logistics and practical software tools.',
          'publisher': {
            '@type': 'Organization',
            'name': 'Neo Tech Era',
            'url': 'https://neotechera.netlify.app/'
          }
        },
        {
          '@type': 'ItemList',
          '@id': 'https://neotechera.netlify.app/#products',
          'name': 'Featured Digital Products',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'The Nabaa Tankers',
              'url': 'https://neotechera.netlify.app/products/nabaa-tankers'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Pix Shield',
              'url': 'https://neotechera.netlify.app/products/pix-shield'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Price Post Pulser',
              'url': 'https://neotechera.netlify.app/products/price-pulser'
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': 'E-Commerce Post Builder',
              'url': 'https://neotechera.netlify.app/products/ecommerce-builder'
            }
          ]
        }
      ]
    }
  },

  'nabaa-detail': {
    view: 'nabaa-detail',
    path: '/products/nabaa-tankers',
    aliases: [
      '/products/nabaa-tanker',
      '/products/nabaa',
      '/nabaa-tankers',
      '/nabaa-tanker',
      '/nabaa',
      '/products/nabaa-detail'
    ],
    title: 'The Nabaa Tankers | On-Demand Water Delivery & Fleet Logistics Platform',
    description: 'The complete on-demand water delivery and fleet logistics ecosystem. Connects central dispatch administration, iOS/Android driver navigation, and frictionless customer mobile ordering with live radar tracking.',
    keywords: [
      'The Nabaa Tanker',
      'water tanker delivery',
      'water tanker Riyadh',
      'Saudi Arabia water delivery app',
      'fleet logistics management',
      'driver dispatch app',
      'emergency water tanker',
      '10T 19T 32T water tanker',
      'on-demand water logistics'
    ],
    ogType: 'product',
    breadcrumbName: 'The Nabaa Tankers',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://neotechera.netlify.app/products/nabaa-tankers#software',
          'name': 'The Nabaa Tankers',
          'applicationCategory': 'LogisticsApplication',
          'operatingSystem': 'Web, iOS, Android',
          'description': 'A unified digital platform for bulk water transport and residential/commercial on-demand delivery, featuring automated dispatch, live driver radar, and digital wallet settlements.',
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'SAR',
            'lowPrice': 120,
            'highPrice': 320,
            'offerCount': 3,
            'offers': [
              {
                '@type': 'Offer',
                'name': 'Small Tanker (10 Tons / 10,000 Liters)',
                'price': '120',
                'priceCurrency': 'SAR',
                'description': 'Ideal for residential villas, emergency water top-ups, and irrigation.'
              },
              {
                '@type': 'Offer',
                'name': 'Medium Tanker (19 Tons / 19,000 Liters)',
                'price': '200',
                'priceCurrency': 'SAR',
                'description': 'Most popular for standard compounds, pools, and small clinics.'
              },
              {
                '@type': 'Offer',
                'name': 'Large Tanker (32 Tons / 32,000 Liters)',
                'price': '320',
                'priceCurrency': 'SAR',
                'description': 'Commercial buildings, construction sites, and farm reservoirs.'
              }
            ]
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1420',
            'bestRating': '5',
            'worstRating': '1'
          },
          'featureList': [
            'Central Business Admin Web Dashboard',
            'Interactive Customer Mobile Ordering App with OTP Login',
            'Driver Logistics Console with Turn-by-Turn GPS',
            'Live Driver Radar Scanning & ETA Calculation',
            'Hose Pumping Telemetry (1,200 Liters/min)',
            'Integrated Driver Wallet and Instant Trip Commission',
            'Promotions Engine with Automated Voucher Deductions'
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://neotechera.netlify.app/products/nabaa-tankers#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://neotechera.netlify.app/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Products',
              'item': 'https://neotechera.netlify.app/#products'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'The Nabaa Tankers',
              'item': 'https://neotechera.netlify.app/products/nabaa-tankers'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://neotechera.netlify.app/products/nabaa-tankers#faq',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What tanker capacities does The Nabaa Tankers provide?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The platform manages Small Tankers (10 Tons / 10,000 L at 120 SAR), Medium Tankers (19 Tons / 19,000 L at 200 SAR), and Large Tankers (32 Tons / 32,000 L at 320 SAR) with calibrated 40-60m heavy-duty hoses and 1,200 L/min pumping.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How does live driver dispatch work in the customer mobile app?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'When a customer places an order, the backend geo-engine scans available tankers within a 5 km radius, matches the nearest active driver, and provides real-time radar tracking, ETA, and direct driver calling.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What payment methods are supported on The Nabaa Tankers?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The platform supports Mada debit cards, Visa, Mastercard, Apple Pay, Google Pay, and Cash on Delivery (COD).'
              }
            }
          ]
        }
      ]
    }
  },

  'pix-shield-detail': {
    view: 'pix-shield-detail',
    path: '/products/pix-shield',
    aliases: [
      '/pix-shield',
      '/products/pixshield',
      '/pixshield',
      '/products/pix-shield-detail'
    ],
    title: 'Pix Shield | Smart Digital Image Watermarking & Visual Asset Protection',
    description: 'Protect your photos, graphics, and digital assets with Pix Shield. Fast in-browser watermarking, configurable opacity, custom branding, and instant high-resolution export.',
    keywords: [
      'Pix Shield',
      'image watermarking tool',
      'photo copyright protection',
      'digital asset security',
      'watermark generator',
      'batch photo protection',
      'creator tools'
    ],
    ogType: 'product',
    breadcrumbName: 'Pix Shield',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://neotechera.netlify.app/products/pix-shield#software',
          'name': 'Pix Shield',
          'applicationCategory': 'MultimediaApplication',
          'operatingSystem': 'Web Browser',
          'description': 'A smart image protection and watermarking tool designed to help creators, photographers, and businesses protect their visual content from unauthorized reuse.',
          'featureList': [
            'Live interactive watermark sandbox preview',
            'Customizable position (diagonal, center, corners)',
            'Fine-grained opacity and font sizing sliders',
            'High-resolution zero-compression export',
            'Client-side instant rendering without server upload'
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://neotechera.netlify.app/products/pix-shield#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://neotechera.netlify.app/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Products',
              'item': 'https://neotechera.netlify.app/#products'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Pix Shield',
              'item': 'https://neotechera.netlify.app/products/pix-shield'
            }
          ]
        }
      ]
    }
  },

  'price-pulser-detail': {
    view: 'price-pulser-detail',
    path: '/products/price-pulser',
    aliases: [
      '/products/price-post-pulser',
      '/price-post-pulser',
      '/price-pulser',
      '/products/price-pulser-detail'
    ],
    title: 'Price Post Pulser | Instant Social Media Pricing Card & Promo Creator',
    description: 'Transform raw product pricing data into high-converting visual cards for Instagram, X, WhatsApp, and social commerce in seconds. Features customizable themes and discount badges.',
    keywords: [
      'Price Post Pulser',
      'pricing card creator',
      'social media price graphics',
      'discount post generator',
      'Instagram pricing card',
      'WhatsApp price list builder',
      'retail promo designer'
    ],
    ogType: 'product',
    breadcrumbName: 'Price Post Pulser',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://neotechera.netlify.app/products/price-pulser#software',
          'name': 'Price Post Pulser',
          'applicationCategory': 'BusinessApplication',
          'operatingSystem': 'Web Browser',
          'description': 'A visual marketing tool that turns pricing data into professionally designed, branded social media cards ready for instant distribution.',
          'featureList': [
            'Instant price badge and discount percentage calculator',
            'Curated themes including Cyberpunk Neon, Emerald Luxury, and Clean Minimal',
            'Pre-formatted for Instagram Feed (1:1), Stories (9:16), and WhatsApp cards',
            'Direct PNG and SVG graphic export'
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://neotechera.netlify.app/products/price-pulser#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://neotechera.netlify.app/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Products',
              'item': 'https://neotechera.netlify.app/#products'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Price Post Pulser',
              'item': 'https://neotechera.netlify.app/products/price-pulser'
            }
          ]
        }
      ]
    }
  },

  'ecommerce-builder-detail': {
    view: 'ecommerce-builder-detail',
    path: '/products/ecommerce-builder',
    aliases: [
      '/products/ecommerce-post-builder',
      '/ecommerce-post-builder',
      '/ecommerce-builder',
      '/products/ecommerce-builder-detail'
    ],
    title: 'E-Commerce Post Builder | High-Converting Online Store Visual Showcase Creator',
    description: 'Design professional, sales-driven e-commerce product posts and promotional banners with E-Commerce Post Builder. Tailored for online retailers and boutique merchants.',
    keywords: [
      'E-Commerce Post Builder',
      'ecommerce product showcase',
      'social shopping post creator',
      'online store banner maker',
      'product graphic designer',
      'retail visual marketing'
    ],
    ogType: 'product',
    breadcrumbName: 'E-Commerce Post Builder',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://neotechera.netlify.app/products/ecommerce-builder#software',
          'name': 'E-Commerce Post Builder',
          'applicationCategory': 'MarketingApplication',
          'operatingSystem': 'Web Browser',
          'description': 'A specialized creative tool for online sellers to generate conversion-optimized product showcases with promo badges and stock indicators.',
          'featureList': [
            'Product image framing with auto drop-shadows',
            'Dynamic price, strike-through original price, and savings badge',
            'Stock urgency triggers (e.g. Only 3 units left)',
            'Direct export optimized for modern mobile marketplaces'
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://neotechera.netlify.app/products/ecommerce-builder#breadcrumb',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://neotechera.netlify.app/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Products',
              'item': 'https://neotechera.netlify.app/#products'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'E-Commerce Post Builder',
              'item': 'https://neotechera.netlify.app/products/ecommerce-builder'
            }
          ]
        }
      ]
    }
  }
};

/**
 * Normalizes a URL path by removing trailing slashes and converting to lowercase.
 */
function normalizePath(rawPath: string): string {
  if (!rawPath || rawPath === '/') return '/';
  const clean = rawPath.toLowerCase().split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean || '/';
}

/**
 * Resolves any browser pathname (or alias) into the corresponding PageView.
 */
export function matchPathToView(pathname: string): PageView {
  const normalized = normalizePath(pathname);

  // Check each route configuration
  for (const [viewKey, config] of Object.entries(ROUTES_CONFIG)) {
    if (config.path === normalized) {
      return viewKey as PageView;
    }
    if (config.aliases.some((alias) => normalizePath(alias) === normalized)) {
      return viewKey as PageView;
    }
  }

  return 'home';
}

/**
 * Returns the canonical URL path for a given PageView.
 */
export function getViewCanonicalPath(view: PageView): string {
  return ROUTES_CONFIG[view]?.path || '/';
}

/**
 * Returns the full canonical URL (e.g., https://neotechera.netlify.app/products/nabaa-tankers).
 */
export function getViewFullCanonicalUrl(view: PageView): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://neotechera.netlify.app';
  const path = getViewCanonicalPath(view);
  return `${origin}${path === '/' ? '' : path}`;
}

/**
 * Dynamically updates document metadata (title, meta description, og tags, canonical link, and JSON-LD schema).
 */
export function updateDocumentSEO(view: PageView): void {
  if (typeof document === 'undefined') return;

  const config = ROUTES_CONFIG[view] || ROUTES_CONFIG['home'];
  const canonicalUrl = getViewFullCanonicalUrl(view);

  // 1. Title
  document.title = config.title;

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
  setMeta('name', 'description', config.description);
  setMeta('name', 'keywords', config.keywords.join(', '));
  setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // 4. Open Graph Meta Tags
  setMeta('property', 'og:title', config.title);
  setMeta('property', 'og:description', config.description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', config.ogType);
  setMeta('property', 'og:site_name', 'The Nabaa Tanker & Neo Tech Era');

  // 5. Twitter Card Meta Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', config.title);
  setMeta('name', 'twitter:description', config.description);

  // 6. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 7. Structured Data (JSON-LD) for SEO & AEO
  let scriptTag = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'schema-json-ld';
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(config.schema, null, 2);
}
