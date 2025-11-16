/**
 * Delivery Configuration for Rose & Lime Faloodeh
 * 
 * Rules:
 * - Delivery only available to Westend Ottawa
 * - Pickup only available at Kanata South
 * - Orders $35-$74.99: $5 delivery fee
 * - Orders $75+: Free delivery
 * - Orders under $35: Delivery not available
 */

export interface DeliveryFeeResult {
  fee: number;
  eligible: boolean;
  message: string;
}

export function calculateDeliveryFee(subtotal: number): DeliveryFeeResult {
  if (subtotal < 35) {
    return {
      fee: 0,
      eligible: false,
      message: `Delivery requires a minimum order of $35 (current: $${subtotal.toFixed(2)})`,
    };
  }
  
  if (subtotal >= 75) {
    return {
      fee: 0,
      eligible: true,
      message: "Free delivery for orders over $75",
    };
  }
  
  return {
    fee: 5,
    eligible: true,
    message: "$5 delivery fee for orders $35-$74.99",
  };
}

export const DELIVERY_LOCATIONS = {
  DELIVERY: "Westend Ottawa",
  PICKUP: "Kanata South",
};

export const DELIVERY_MIN_ORDER = 35;
export const DELIVERY_FREE_THRESHOLD = 75;
export const DELIVERY_FEE = 5;
