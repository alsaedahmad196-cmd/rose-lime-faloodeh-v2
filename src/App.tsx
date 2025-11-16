import React, { useState, useEffect } from "react";
import {
  Hero,
  Features,
  ProductList,
  Story,
  Cart,
  Checkout,
  OrderConfirmation,
  Header,
  Footer,
  CTA,
  Catering,
  Contact,
  type CartItem,
  type OrderData,
} from "./components/FaloodhStore";
import { AddedToCartToast } from "./components/FaloodhStore/AddedToCartToast";

type Section = "home" | "story" | "order";

interface AddedItem {
  name: string;
  size: string;
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<"pickup" | "delivery" | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<{
    data: OrderData;
    total: number;
  } | null>(null);
  const [addedItem, setAddedItem] = useState<AddedItem | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("faloodhCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart from localStorage", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("faloodhCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (
    productId: number,
    size: string,
    price: number,
    name: string
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === productId && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += 1;
        return updated;
      }
      return [
        ...prev,
        { id: productId, name, size, price, qty: 1 },
      ];
    });
    
    // Show toast notification
    setAddedItem({ name, size });
    setTimeout(() => setAddedItem(null), 3000); // Auto-hide after 3 seconds
  };

  const handleUpdateQty = (index: number, qty: number) => {
    if (qty < 1) {
      handleRemoveItem(index);
    } else {
      setCartItems((prev) => {
        const updated = [...prev];
        updated[index].qty = qty;
        return updated;
      });
    }
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderSubmit = (data: OrderData) => {
    const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    let delivery = 0;
    
    if (orderType === "delivery") {
      if (subtotal > 75) {
        delivery = 0;
      } else if (subtotal >= 35) {
        delivery = 5;
      } else {
        alert("Delivery requires a minimum order of $35. Please add more items or select Pickup.");
        return;
      }
    }
    
    const total = subtotal + delivery;

    setOrderConfirmation({ data, total });
    setShowCheckout(false);
  };

  const handlePlaceAnother = () => {
    setOrderConfirmation(null);
    setCartItems([]);
    setActiveSection("order");
  };

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setShowCheckout(false);
    setOrderConfirmation(null);
    // Use requestAnimationFrame to ensure state updates first, then scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      {/* Sticky Header */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      <main>
        {/* Home Section */}
        {activeSection === "home" && (
          <>
            <Hero
              onOrderClick={() => handleNavClick("order")}
              onStoryClick={() => handleNavClick("story")}
            />
            <Features />
            <Contact />
            <CTA onOrderClick={() => handleNavClick("order")} />
          </>
        )}

        {/* Story Section */}
        {activeSection === "story" && <Story />}

        {/* Order Section */}
        {activeSection === "order" && (
          <>
            <section className="min-h-screen py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                  <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
                    Place Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-yellow-600 to-lime-500">
                      Order
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Select your favorite flavors and we'll prepare them fresh for you
                  </p>
                  <div className="flex justify-center mt-6">
                    <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-yellow-400 to-lime-400 rounded-full"></div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Products */}
                  <div className="lg:col-span-2">
                    <ProductList onAddToCart={handleAddToCart} />
                  </div>

                  {/* Cart Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <Cart
                        items={cartItems}
                        orderType={orderType}
                        onUpdateQty={handleUpdateQty}
                        onRemove={handleRemoveItem}
                        onClearCart={handleClearCart}
                        onShowCheckout={() => setShowCheckout(true)}
                        onOrderTypeChange={setOrderType}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Catering Section on Order Page */}
            <Catering />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Checkout Modal */}
      {showCheckout && (
        <Checkout
          items={cartItems}
          orderType={orderType}
          onSubmit={handleOrderSubmit}
          onClose={() => setShowCheckout(false)}
        />
      )}

      {/* Order Confirmation Modal */}
      {orderConfirmation && (
        <OrderConfirmation
          orderData={orderConfirmation.data}
          total={orderConfirmation.total}
          onPlaceAnother={handlePlaceAnother}
        />
      )}

      {/* Added to Cart Toast */}
      {addedItem && (
        <AddedToCartToast
          name={addedItem.name}
          size={addedItem.size}
          onDismiss={() => setAddedItem(null)}
        />
      )}
    </div>
  );
}

export default App;
