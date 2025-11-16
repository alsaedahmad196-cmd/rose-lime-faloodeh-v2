# Rose & Lime Faloodeh Storefront

A modern single-page storefront for Rose & Lime Faloodeh built with React, TypeScript, and Tailwind CSS. The experience showcases signature flavours, catering details, and a checkout flow that collects order requests.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The production bundle is generated in the `dist/` directory.

## 🧱 Project Structure
```
├── src/
│   ├── components/FaloodhStore/   # Feature components (Hero, ProductList, Checkout, etc.)
│   ├── components/mock/           # Mock data for products and gallery
│   ├── utils/                     # Delivery logic, Web3Forms submission helper
│   ├── App.tsx                    # App shell
│   └── main.tsx                   # Entry point
├── public/                        # Static assets copied as-is
├── dist/                          # Production build output (generated)
└── .github/workflows/deploy.yml   # GitHub Pages deployment workflow
```

## 🌐 Deployment to GitHub Pages
This repository includes a GitHub Actions workflow that builds the project and publishes the `dist/` output to GitHub Pages.

1. Commit and push your changes to the `main` branch.
2. Enable GitHub Pages in the repository settings and pick the "GitHub Actions" source.
3. The workflow will run automatically on each push to `main`, producing a live site.

For manual runs, trigger the workflow from the "Actions" tab using the `workflow_dispatch` event.

## 📦 Environment & Configuration
- Form submissions use Web3Forms. Update `WEB3FORMS_ACCESS_KEY` in `src/utils/formSubmit.ts` if you need a different key.
- Update branding, copy, or imagery directly in the components within `src/components/FaloodhStore/`.

## 🧪 Suggested Follow-Up
- Add automated tests before shipping to production.
- Integrate a backend service when real order persistence is needed.
