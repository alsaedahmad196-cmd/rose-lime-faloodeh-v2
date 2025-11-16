# Rose & Lime Faloodeh - React Storefront

A modern React-based e-commerce storefront for Rose & Lime Faloodeh, a Persian dessert business. Built with TypeScript, Vite, and Tailwind CSS.

## Project Status

- **Project Type**: React + TypeScript Modern Web Application (Vite)
- **Entry Point**: `src/main.tsx`
- **Build System**: Vite 7.0.0
- **Styling System**: Tailwind CSS 3.4.17

## Architecture Overview

### Component Structure

The application is organized as a single-page application (SPA) with modular, reusable React components in `src/components/FaloodhStore/`:

**Core Components:**
- **App.tsx** - Main application component managing all state (cart, order type, checkout flow, active section)
- **Header** - Sticky navigation bar with section switcher (Home, Our Story, Order)
- **Hero** - Landing page hero section with CTA buttons
- **Features** - Highlights of the business (authentication, ingredients, handcrafted)
- **ProductList** - Product grid container rendering all products
- **ProductCard** - Individual product card with sizes, prices, and add-to-cart button
- **Cart** - Sidebar cart summary with item management and order type selector
- **Checkout** - Modal form for collecting customer information (name, phone, email, address, notes)
- **OrderConfirmation** - Modal displaying order receipt confirmation
- **Story** - "About Us" page with business narrative and gallery
- **Catering** - Catering section with contact info (phone, email), and 48-hour advance notice requirement
- **CTA** - Call-to-action section prompting order placement
- **Footer** - Contact info and copyright

**Data Layer:**
- `src/components/mock/productsData.ts` - Mock product array and TypeScript interfaces

**Utilities:**
- `src/utils/deliveryConfig.ts` - Delivery fee calculation, location constants, and rules

### Application Flow

1. User lands on **Home** section (Hero + Features)
2. User clicks "Order Now" → navigates to **Order** section
3. User browses products and adds items to cart
4. Cart displays with item management and order type toggle (pickup/delivery)
5. User clicks "Proceed to Checkout" → Checkout modal appears
6. User fills form and submits → Order confirmation modal displays
7. Cart persists to localStorage automatically

### State Management

- **cartItems**: Array of CartItem objects (id, name, size, price, qty)
- **orderType**: "pickup" or "delivery" (affects total calculation and address requirement)
- **showCheckout**: Boolean controlling checkout modal visibility
- **orderConfirmation**: Contains order data and total for confirmation display
- **activeSection**: Tracks current page (home, story, order)

**Cart Persistence:**
- Cart is automatically saved to localStorage whenever items change
- Cart is restored on page load from localStorage

## Development Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally (if needed)
npm run preview
```

## Key Features Implemented

### Core Functionality
- ✅ Multi-section SPA with smooth navigation (Home, Story, Order)
- ✅ Product catalog with 6 signature faloodeh flavors
- ✅ Dynamic cart with add/remove/quantity adjustment
- ✅ Order type selection (Pickup vs Delivery with dynamic fees)
- ✅ Delivery fee logic: $5 fee for orders $35-$74.99, FREE for orders $75+
- ✅ Location-specific fulfillment: Pickup at Kanata South, Delivery to Westend Ottawa
- ✅ Customer checkout form with validation
- ✅ Order confirmation UI with 24-hour fulfillment notice
- ✅ Catering section with contact info and 48-hour notice
- ✅ localStorage persistence for cart

### Delivery & Fulfillment
- **Pickup**: Kanata South location, no delivery fee
- **Delivery**: Westend Ottawa only
  - Minimum order: $35
  - Delivery fee: $5 (orders $35-$74.99)
  - Free delivery: Orders $75+
  - Fee validation happens at checkout submission

### UI/UX
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Gradient color scheme (rose, gold, lime)
- ✅ Lucide React icons throughout
- ✅ Smooth transitions and hover effects
- ✅ Sticky header and sidebar cart
- ✅ Modal dialogs for checkout and confirmation

### Design System
- Color palette: Rose (#f43f5e), Gold (#ca8a04), Lime (#84cc16)
- Typography: Inter font family
- Spacing: Tailwind 8-point scale
- Gradients: Rose-to-Lime throughout

## Type Definitions

Key TypeScript interfaces in `src/components/`:

```typescript
// Product
interface Product {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  prices: { size: string; price: number }[];
  image: string;
  badge?: string;
}

// Cart Item
interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  qty: number;
}

// Order Data
interface OrderData {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  notes?: string;
  orderType: "pickup" | "delivery";
}
```

## Gallery System (Story Page)

The Story page features a responsive 5-image gallery implemented with dedicated components:

**Gallery Components:**
- `src/components/FaloodhStore/Gallery.tsx` - Main gallery component with responsive grid
- `src/components/mock/galleryData.ts` - Gallery image data (title, alt, URL)

**Responsive Design:**
- Mobile (375px): 5 columns, 2px gap (all 5 images visible without scroll)
- Tablet (640px+): 3 columns, 3px gap (adapts to smaller screens)
- Desktop (1024px+): 5 columns, 4px gap (full width layout)

**Gallery Images:**
1. Persian Heritage (Youware CDN)
2. Traditional Preparation (Youware CDN)
3. Rose Water Essence (Pixabay rose frost)
4. Family Moments (Pixabay family fondue)
5. Cultural Tradition (Youware CDN)

## Next Steps (Future Backend Integration)

1. **Backend API Integration** (when ready):
   - Replace localStorage with API calls to persist orders
   - Use Youware Backend for order storage and retrieval
   - Add authentication for customer accounts
   - Implement order status tracking

2. **Recommended Backend Features**:
   - POST `/api/orders` - Submit customer order
   - GET `/api/orders/:id` - Retrieve order status
   - User authentication and order history
   - Admin dashboard for order management

3. **When adding backend**:
   - Follow the Backend Integration Skill workflow
   - Modify checkout submission to call API instead of just showing confirmation
   - Add order status tracking page
   - Keep mock data in dev for testing

## Build and Deployment

- **Build Output**: `dist/` directory (optimized production bundle)
- **Build Size**: ~207KB JS, ~24KB CSS (gzipped: 57KB + 5KB)
- **Browser Support**: Modern browsers (ES2020+)
- **HMR**: Hot Module Replacement enabled in development

## Code Quality Standards

- TypeScript strict mode enabled
- Props-driven component design
- Single responsibility principle
- Semantic HTML and accessibility-conscious markup
- Tailwind CSS for styling (no external CSS files)

## Important Notes

⚠️ **Do NOT modify `index.html` entry point** - The line `<script type="module" src="/src/main.tsx"></script>` is critical and must remain unchanged.

✅ **Asset Paths** - All product and hero images use external URLs (Unsplash, Supabase). No local assets required.

✅ **Currency** - Prices display in CAD using Intl.NumberFormat (e.g., $15.00 CAD).

✅ **Time-Based** - Footer year updates dynamically based on current date.

## Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript settings (strict mode)
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins (Tailwind, Autoprefixer)
- `yw_manifest.json` - Youware project manifest
