import React from "react";
import { ShoppingCart, X, Trash2, Phone } from "lucide-react";
import { calculateDeliveryFee } from "../../utils/deliveryConfig";

export interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  qty: number;
}

interface CartProps {
  items: CartItem[];
  orderType: "pickup" | "delivery" | null;
  onUpdateQty: (index: number, qty: number) => void;
  onRemove: (index: number) => void;
  onClearCart: () => void;
  onShowCheckout: () => void;
  onOrderTypeChange: (type: "pickup" | "delivery") => void;
}

const CAD = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

export const Cart: React.FC<CartProps> = ({
  items,
  orderType,
  onUpdateQty,
  onRemove,
  onClearCart,
  onShowCheckout,
  onOrderTypeChange,
}) => {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const { fee: deliveryFee, eligible: isDeliveryEligible } = calculateDeliveryFee(subtotal);
  const delivery = orderType === "delivery" && isDeliveryEligible ? deliveryFee : 0;
  const total = subtotal + delivery;

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Floating Mobile Order Type Button */}
      {items.length > 0 && !orderType && (
        <button
          onClick={() => {
            const element = document.getElementById("order-type-section");
            if (element) {
              element.scrollIntoView({ behavior: "auto", block: "center" });
            }
          }}
          className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-sage-500 hover:from-primary-600 hover:to-sage-600 text-white shadow-xl flex items-center justify-center transition-all duration-200 animate-pulse"
          title="Select order type"
        >
          <span className="text-2xl">👇</span>
        </button>
      )}
      
      {/* Cart Summary */}
      <div className="border-2 border-secondary-200 shadow-xl rounded-2xl">
        <div className="bg-gradient-to-r from-secondary-100 to-sage-100 rounded-t-2xl px-6 py-4">
          <div className="flex items-center gap-2 font-bold">
            <ShoppingCart className="w-5 h-5 text-secondary-600" />
            <span>Your Cart ({items.reduce((n, i) => n + i.qty, 0)})</span>
          </div>
        </div>

        <div className="p-4">
          {items.length === 0 ? (
            <p className="text-dark-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white p-3 rounded-lg border border-secondary-200"
                  >
                    <div>
                      <p className="font-medium text-sm text-gray-900">{item.name}</p>
                      <p className="text-xs text-dark-500">{item.size}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() => onUpdateQty(idx, Math.max(1, item.qty - 1))}
                          className="px-2 py-1 text-sm hover:bg-secondary-100"
                        >
                          -
                        </button>
                        <span className="px-2 text-sm">{item.qty}</span>
                        <button
                          onClick={() => onUpdateQty(idx, item.qty + 1)}
                          className="px-2 py-1 text-sm hover:bg-secondary-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-secondary-700 w-16 text-right">
                        {CAD.format(item.price * item.qty)}
                      </span>
                      <button
                        onClick={() => onRemove(idx)}
                        className="text-red-500 hover:text-red-700"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t-2 border-secondary-200 pt-3 mb-4 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{CAD.format(subtotal)}</span>
                </div>
                {orderType === "delivery" && (
                  <>
                    <div className="flex justify-between">
                      <span>Delivery ({isDeliveryEligible ? "Westend Ottawa" : "N/A"})</span>
                      <span>
                        {isDeliveryEligible 
                          ? deliveryFee === 0 
                            ? "FREE" 
                            : CAD.format(deliveryFee)
                          : "Not available"}
                      </span>
                    </div>
                    {!isDeliveryEligible && (
                      <p className="text-xs text-accent-600 italic">
                        Delivery requires ${subtotal < 35 ? 35 - Math.floor(subtotal) : 75 - Math.floor(subtotal)} more
                      </p>
                    )}
                  </>
                )}
                <div className="flex justify-between text-base font-bold pt-2">
                  <span>Total</span>
                  <span className="text-secondary-700">{CAD.format(total)}</span>
                </div>
              </div>

              <div className="text-right">
                <button
                  onClick={onClearCart}
                  className="text-dark-600 hover:text-dark-800 text-sm inline-flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" /> Clear cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Order Type Selection */}
      {items.length > 0 && (
        <div id="order-type-section" className="border-2 border-sage-200 shadow-xl rounded-2xl p-6">
          <fieldset>
            <legend className="mb-3 block font-semibold">Order Type</legend>
            <div className="space-y-2">
              <label className={`flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                orderType === "pickup"
                  ? "border-secondary-500 bg-secondary-100"
                  : "border-secondary-200 bg-white hover:bg-secondary-50"
              }`}>
                <input
                  type="radio"
                  name="orderType"
                  value="pickup"
                  checked={orderType === "pickup"}
                  onChange={() => onOrderTypeChange("pickup")}
                  className="w-4 h-4"
                />
                <div className="flex-1">
                  <span className={`font-medium ${
                    orderType === "pickup" ? "text-secondary-700" : "text-gray-800"
                  }`}>Pickup at Kanata South</span>
                  <p className="text-xs text-dark-600">No delivery fee</p>
                </div>
              </label>
              <label className={`flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                orderType === "delivery"
                  ? "border-sage-500 bg-sage-100"
                  : "border-secondary-200 bg-white hover:bg-secondary-50"
              }`}>
                <input
                  type="radio"
                  name="orderType"
                  value="delivery"
                  checked={orderType === "delivery"}
                  onChange={() => onOrderTypeChange("delivery")}
                  className="w-4 h-4"
                />
                <div className="flex-1">
                  <span className={`font-medium ${
                    orderType === "delivery" ? "text-sage-700" : "text-gray-800"
                  }`}>Delivery - Westend Ottawa</span>
                  <p className="text-xs text-dark-600">
                    Min $35 order • Free over $75
                  </p>
                </div>
              </label>
            </div>
          </fieldset>

          <button
            onClick={onShowCheckout}
            disabled={!orderType || (orderType === "delivery" && !isDeliveryEligible)}
            title={orderType === "delivery" && !isDeliveryEligible ? `Minimum order $35 for delivery (current: $${Math.floor(subtotal)})` : ""}
            className="w-full mt-4 bg-gradient-to-r from-secondary-500 to-sage-600 hover:from-secondary-600 hover:to-sage-700 disabled:from-dark-400 disabled:to-dark-400 disabled:cursor-not-allowed text-white py-3 text-lg font-semibold shadow-lg rounded-lg inline-flex items-center justify-center transition-all duration-200"
          >
            <Phone className="w-5 h-5 mr-2" /> Proceed to Checkout
          </button>
        </div>
      )}
    </aside>
  );
};
