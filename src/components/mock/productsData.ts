export interface Product {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  prices: { size: string; price: number }[];
  image: string;
  badge?: string;
  variants?: { name: string; description?: string; ingredients?: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Traditional Faloodeh",
    description: "Classic recipe with your choice of rose water or pure preparation",
    ingredients: "starch noodles, sugar",
    prices: [
      { size: "500g", price: 15 },
      { size: "1kg", price: 25 },
    ],
    image: "https://public.youware.com/image/cd854567-5b5e-4eed-92a0-57c1cacc0d5a/u6n9ntzpoi.png",
    variants: [
      {
        name: "With Rose Water",
        description: "Classic recipe with rose water and fresh lime",
        ingredients: "starch noodles, rose water, sugar",
      },
      {
        name: "Without Rose Water",
        description: "Pure and refreshing starch noodles with lime juice",
        ingredients: "starch noodles, sugar",
      },
    ],
  },
  {
    id: 2,
    name: "Saffron Faloodeh",
    description: "Luxurious blend with premium saffron and crushed pistachios",
    ingredients: "starch noodles, sugar, saffron, pistachio, rose water",
    prices: [
      { size: "500g", price: 20 },
      { size: "1kg", price: 35 },
    ],
    image: "https://public.youware.com/image/08a2353a-27e1-4a03-9b13-c8d5f020fb6e/ry4qwt47mk.png",
  },
  {
    id: 3,
    name: "Sour Cherry Faloodeh",
    description: "Sweet and tangy sour cherries with delicate starch noodles",
    ingredients: "starch noodles, sugar, sour cherries, rose water",
    prices: [
      { size: "500g", price: 15 },
      { size: "1kg", price: 25 },
    ],
    image: "https://public.youware.com/image/509cf506-8c4a-46ae-87cd-b808b60c3585/qkpu3pelkv.png",
  },
  {
    id: 4,
    name: "Mastic & Orange Blossom Faloodeh",
    description: "Exotic aromatic blend with mastic and orange blossom",
    ingredients: "starch noodles, sugar, orange blossom, mastic, pistachio",
    prices: [
      { size: "500g", price: 20 },
      { size: "1kg", price: 35 },
    ],
    image: "/mastic-orange-blossom.png",
  },
  {
    id: 5,
    name: "Lime & Mint Faloodeh",
    description: "Fresh and cooling with zesty lime and refreshing mint",
    ingredients: "starch noodles, sugar, lime, mint",
    prices: [
      { size: "500g", price: 15 },
      { size: "1kg", price: 25 },
    ],
    image: "https://public.youware.com/image/034b178b-f6e0-49a5-a9df-ff5fed3b6e0c/v19d9en257.png",
  },
];
