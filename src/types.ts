export type PageView = 
  | 'home'
  | 'nabaa-detail'
  | 'pix-shield-detail'
  | 'price-pulser-detail'
  | 'ecommerce-builder-detail';

export interface ProductSummary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  isFlagship?: boolean;
  badge?: string;
  capabilities: string[];
  icon: string;
  routeId: PageView;
  colorScheme: 'water' | 'cyan' | 'purple' | 'emerald';
}

export interface TankerSize {
  id: string;
  name: string;
  capacity: string;
  liters: string;
  idealFor: string;
  priceSAR: number;
  popular?: boolean;
}

export interface PromotionOffer {
  id: string;
  name: string;
  badge: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  maxDiscountSAR: number;
  minOrderSAR: number;
  eligibleSizes: string[];
  targetGroup: string;
  validUntil: string;
  code?: string;
}

export interface DriverProfile {
  id: string;
  name: string;
  rating: number;
  vehicleNo: string;
  tankerSize: string;
  totalTrips: number;
  phone: string;
  status: 'available' | 'on_delivery' | 'offline';
  walletBalanceSAR: number;
  commissionType: 'percentage' | 'fixed';
  commissionRate: string;
}

export interface OrderState {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  tankerSizeId: string;
  deliveryType: 'now' | 'scheduled';
  scheduledDate?: string;
  scheduledSlot?: string;
  paymentMethod: 'cash' | 'card' | 'apple_google_pay';
  subtotalSAR: number;
  promotionDiscountSAR: number;
  promoCodeDiscountSAR: number;
  totalSAR: number;
  appliedOfferName?: string;
  appliedPromoCode?: string;
  status: 'created' | 'searching_driver' | 'driver_assigned' | 'in_progress' | 'completed';
  assignedDriver?: DriverProfile;
}
