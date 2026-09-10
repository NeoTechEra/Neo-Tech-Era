import { ProductSummary, TankerSize, PromotionOffer, DriverProfile } from '../types';

export const PRODUCTS_LIST: ProductSummary[] = [
  {
    id: 'nabaa-tankers',
    name: 'The Nabaa Tankers',
    tagline: 'Complete Water Delivery Platform',
    description: 'A complete digital ecosystem for water tanker businesses, connecting administrators, customers, and drivers through one powerful system.',
    isFlagship: true,
    badge: 'OUR PREMIUM PRODUCT',
    capabilities: [
      'Central Business Admin Dashboard',
      'Intuitive Customer Mobile Ordering App',
      'Dedicated Driver Logistics & Route App',
      'Instant & Scheduled Delivery Modes',
      'Automated Promotions & Promo Codes',
      'Driver Commission & Wallet Engine'
    ],
    icon: 'Droplets',
    routeId: 'nabaa-detail',
    colorScheme: 'water'
  },
  {
    id: 'pix-shield',
    name: 'Pix Shield',
    tagline: 'Sign 🖋️ & Shield Your Pixels.',
    description: 'A smart image protection and watermarking tool designed to help creators and businesses protect their visual content.',
    badge: 'Content Protection',
    capabilities: [
      'Add custom watermarks',
      'Protect original images',
      'Branding support',
      'Fast and simple image processing'
    ],
    icon: 'ShieldCheck',
    routeId: 'pix-shield-detail',
    colorScheme: 'cyan'
  },
  {
    id: 'price-post-pulser',
    name: 'Price Post Pulser',
    tagline: 'Turn Pricing Data into Visual Posts.',
    description: 'A tool designed to quickly create professional and attractive pricing posts, turning product prices and information into ready-to-share visual content.',
    badge: 'Visual Marketing',
    capabilities: [
      'Create pricing posts quickly',
      'Professional ready-made layouts',
      'Product and price customization',
      'Designed for social media and marketing use'
    ],
    icon: 'Zap',
    routeId: 'price-pulser-detail',
    colorScheme: 'purple'
  },
  {
    id: 'ecommerce-post-builder',
    name: 'E-Commerce Post Builder',
    tagline: 'High-Converting Online Store Visuals.',
    description: 'A tool for creating professional e-commerce product posts and promotional visuals for online sellers wanting to produce marketing content faster.',
    badge: 'Seller Growth',
    capabilities: [
      'Product-focused post creation',
      'Add product images and details',
      'Add pricing and promotional information',
      'Create attractive marketing visuals'
    ],
    icon: 'ShoppingBag',
    routeId: 'ecommerce-builder-detail',
    colorScheme: 'emerald'
  }
];

export const NABAA_TANKER_SIZES: TankerSize[] = [
  {
    id: 'small',
    name: 'Small Tanker',
    capacity: '10 Tons',
    liters: '10,000 Liters',
    idealFor: 'Residential villas, emergency water top-ups, garden irrigation',
    priceSAR: 120,
    popular: false
  },
  {
    id: 'medium',
    name: 'Medium Tanker',
    capacity: '19 Tons',
    liters: '19,000 Liters',
    idealFor: 'Standard residential compounds, commercial pools, small clinics',
    priceSAR: 200,
    popular: true
  },
  {
    id: 'large',
    name: 'Large Tanker',
    capacity: '32 Tons',
    liters: '32,000 Liters',
    idealFor: 'Commercial buildings, construction sites, industrial storage, farm reservoirs',
    priceSAR: 320,
    popular: false
  }
];

export const NABAA_PROMOTIONS: PromotionOffer[] = [
  {
    id: 'ramadan-2026',
    name: 'Ramadan Water Offer',
    badge: 'Seasonal Special',
    description: 'Save 15% on any residential or commercial tanker delivery up to 30 SAR maximum discount.',
    discountType: 'percentage',
    discountValue: 15,
    maxDiscountSAR: 30,
    minOrderSAR: 100,
    eligibleSizes: ['small', 'medium', 'large'],
    targetGroup: 'All customers',
    validUntil: 'Valid this month'
  },
  {
    id: 'new-user-welcome',
    name: 'First Order Welcome Bonus',
    badge: 'New Accounts',
    description: 'Flat 25 SAR discount on your first water delivery order over 150 SAR.',
    discountType: 'fixed',
    discountValue: 25,
    maxDiscountSAR: 25,
    minOrderSAR: 150,
    eligibleSizes: ['medium', 'large'],
    targetGroup: 'New customers',
    validUntil: 'Auto-applied for new profiles'
  }
];

export const VALID_PROMO_CODES: Record<string, { discountSAR: number; description: string }> = {
  'NEO20': { discountSAR: 20, description: 'Neo Tech Era Special (20 SAR off)' },
  'WATERFAST': { discountSAR: 15, description: 'Priority Fast Dispatch Code (15 SAR off)' },
  'SUMMER10': { discountSAR: 10, description: 'Summer Hydration Perk (10 SAR off)' }
};

export const SAMPLE_DRIVERS: DriverProfile[] = [
  {
    id: 'drv-1',
    name: 'Tariq Al-Mansoor',
    rating: 4.9,
    vehicleNo: 'KSA 4821-B',
    tankerSize: 'Medium Tanker (19T)',
    totalTrips: 1420,
    phone: '+966 50 284 9911',
    status: 'available',
    walletBalanceSAR: 1840,
    commissionType: 'percentage',
    commissionRate: '15%'
  },
  {
    id: 'drv-2',
    name: 'Saeed Al-Ghamdi',
    rating: 4.85,
    vehicleNo: 'KSA 7192-X',
    tankerSize: 'Large Tanker (32T)',
    totalTrips: 980,
    phone: '+966 54 119 4432',
    status: 'available',
    walletBalanceSAR: 2310,
    commissionType: 'fixed',
    commissionRate: '35 SAR / trip'
  },
  {
    id: 'drv-3',
    name: 'Fahad Al-Otaibi',
    rating: 4.95,
    vehicleNo: 'KSA 3310-M',
    tankerSize: 'Small Tanker (10T)',
    totalTrips: 2150,
    phone: '+966 55 901 7733',
    status: 'available',
    walletBalanceSAR: 950,
    commissionType: 'percentage',
    commissionRate: '12%'
  }
];
