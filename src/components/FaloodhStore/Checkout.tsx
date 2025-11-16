import React, { useState } from "react";
import { Phone, Check, X } from "lucide-react";
import { CartItem } from "./Cart";
import { calculateDeliveryFee } from "../../utils/deliveryConfig";
import { submitViaWeb3Forms, WEB3FORMS_ACCESS_KEY } from "../../utils/formSubmit";

interface CheckoutProps {
  items: CartItem[];
  orderType: "pickup" | "delivery" | null;
  onSubmit: (data: OrderData) => void;
  onClose: () => void;
}

interface OrderConfirmationProps {
  orderData: OrderData;
  total: number;
  onPlaceAnother: () => void;
}

export interface OrderData {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  notes?: string;
  orderType: "pickup" | "delivery";
}

const CAD = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});


export const Checkout: React.FC<CheckoutProps> = ({ items, orderType, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<OrderData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    orderType: orderType as "pickup" | "delivery",
  });

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const { fee: deliveryFee, eligible: isDeliveryEligible } = calculateDeliveryFee(subtotal);
  const delivery = orderType === "delivery" && isDeliveryEligible ? deliveryFee : 0;
  const total = subtotal + delivery;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderType) {
      alert("Please select Pickup or Delivery before proceeding.");
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    if (orderType === "delivery" && !formData.address?.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    const orderLines = items.map(
      (item) => `${item.name} — ${item.size} — $${item.price.toFixed(2)}`
    );

    const submissionData: OrderData = {
      ...formData,
      orderType,
    } as OrderData;

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Faloodeh Order",
      from_name: submissionData.name,
      from_email: submissionData.email || "orders@roseandlimefaloodeh.ca",
      whatsapp: submissionData.phone,
      order_type: orderType,
      address: orderType === "delivery" ? submissionData.address ?? "" : "Pickup",
      notes: submissionData.notes || "—",
      items: orderLines.join("\n"),
      subtotal: CAD.format(subtotal),
      delivery:
        orderType === "delivery" && isDeliveryEligible
          ? deliveryFee === 0
            ? "FREE"
            : CAD.format(deliveryFee)
          : "Pickup",
      total: CAD.format(total),
    };

    try {
      await submitViaWeb3Forms(payload);
      onSubmit(submissionData);
    } catch (err) {
      console.error(err);
      alert("Error sending order, please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-secondary-100 to-sage-100 sticky top-0 px-6 py-4 border-b border-secondary-200">
          <div className="font-bold text-lg">Complete Your Order</div>
          <div className="text-dark-600 text-sm">Fill in your details below</div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Order Summary */}
          <div className="bg-secondary-100 p-4 rounded-lg mb-4">
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{CAD.format(subtotal)}</span>
              </div>
              {orderType === "delivery" && isDeliveryEligible && (
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? "FREE" : CAD.format(deliveryFee)}</span>
                </div>
              )}
              <div className="border-t border-secondary-200 pt-1 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-secondary-700">{CAD.format(total)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-secondary-200 rounded-lg p-4 mb-4">
            <h3 className="text-base font-semibold text-dark-800 mb-1">Payment Methods</h3>
            <p className="text-sm text-dark-600">
              We accept cash or email transfers only. Please send e-transfers to
              <span className="font-semibold"> roseandlimefaloodeh@gmail.com</span>.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-900">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full border border-secondary-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 appearance-none [&:focus]:border-secondary-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-900">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g., 613-265-7888"
              className="w-full border border-secondary-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 appearance-none [&:focus]:border-secondary-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-900">
              Email Address (Optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email || ""}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full border border-secondary-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 appearance-none [&:focus]:border-secondary-300"
            />
          </div>

          {/* Delivery Address */}
          {orderType === "delivery" && (
            <div>
              <label htmlFor="address" className="block mb-2 font-semibold text-gray-900">
                Delivery Address *
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required={orderType === "delivery"}
                value={formData.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Street, city, postal code"
                className="w-full border border-secondary-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 appearance-none [&:focus]:border-secondary-300"
              />
            </div>
          )}

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block mb-2 font-semibold text-gray-900">
              Special Requests (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes || ""}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any special requests or dietary restrictions..."
              className="w-full border border-secondary-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 appearance-none [&:focus]:border-secondary-300 resize-none"
            />
          </div>

          {/* Submit & Cancel */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-dark-300 text-dark-700 py-2 rounded-lg font-semibold hover:bg-dark-50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-secondary-500 to-sage-600 hover:from-secondary-600 hover:to-sage-700 text-white py-2 font-semibold shadow-lg rounded-lg inline-flex items-center justify-center transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" /> Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderData,
  total,
  onPlaceAnother,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 text-center relative">
        <button
          onClick={onPlaceAnother}
          className="absolute top-4 right-4 text-dark-500 hover:text-dark-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-20 h-20 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Check className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-900">Order Received!</h2>

        <p className="text-lg text-dark-700 mb-6">
          Thank you for your order! We will contact you shortly at{" "}
          <strong>{orderData.phone}</strong> to confirm the details.
        </p>

        <div className="bg-secondary-100 border-l-4 border-secondary-400 p-4 rounded-r-lg mb-6 text-left">
          <p className="text-dark-800">
            <strong>Order Type:</strong> {orderData.orderType === "pickup" ? "Pickup" : "Delivery"}
            <br />
            <strong>Name:</strong> {orderData.name}
            {orderData.orderType === "delivery" && (
              <>
                <br />
                <strong>Address:</strong> {orderData.address}
              </>
            )}
            <br />
            <strong>Total:</strong> {CAD.format(total)}
          </p>
        </div>

        <div className="bg-white border-l-4 border-secondary-400 p-4 rounded-r-lg mb-6 text-left text-sm">
          <p className="text-dark-700">
            <strong>Payment Methods:</strong> We accept cash or email transfers only. Please send e-transfers to
            <span className="font-semibold"> roseandlimefaloodeh@gmail.com</span>.
          </p>
        </div>

        <div className="bg-sage-100 border-l-4 border-sage-400 p-4 rounded-r-lg mb-6 text-left text-sm">
          <p className="text-sage-900">
            <strong>Important:</strong> Your order will be ready within 24 hours. We will contact you to confirm the exact time.
          </p>
        </div>

        <button
          onClick={onPlaceAnother}
          className="w-full bg-gradient-to-r from-secondary-500 to-sage-600 hover:from-secondary-600 hover:to-sage-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-200"
        >
          Place Another Order
        </button>
      </div>
    </div>
  );
};
