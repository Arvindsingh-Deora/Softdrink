export type Flavor = "chocolate" | "vanilla" | "orange";
export type PurchaseType = "one-time" | "subscription" | "simple";
export type Bundle = "single" | "double";

export type ProductImage = {
  id: number;
  url: string;
  alt: string;
  hint: string;
};

type ProductImages = {
  default: ProductImage[];
  [key: string]: ProductImage[];
};

export interface Product {
  id: number;
  slug: string;
  name: string;
  basePrice: number;
  description: string;
  type: 'simple' | 'complex';
  images: ProductImages;
  flavors?: { id: Flavor; name: string }[];
  ingredients?: string;
  nutrition?: string;
}

const products: Product[] = [
  {
    id: 1,
    slug: "protein-powder",
    name: "Protein Powder",
    basePrice: 40,
    type: 'complex',
    description: "Our Protein Powder is designed for optimal performance and recovery. Made with high-quality, all-natural ingredients to help you achieve your fitness goals.",
    ingredients: "Whey Protein Isolate, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 25g. Carbs: 2g. Fat: 1g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [{ id: 1, url: "https://static.thcdn.com/productimg/original/11654605-1275212429129161.jpg", alt: "Chocolate protein powder", hint: "protein powder" }],
      chocolate: [
        { id: 1, url: "https://static.thcdn.com/productimg/original/11654605-1275212429129161.jpg", alt: "Chocolate protein powder", hint: "protein powder" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Scoop of chocolate powder", hint: "scoop powder" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle fitness", hint: "lifestyle fitness" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Protein drink bottle", hint: "drink bottle" },
      ],
      vanilla: [
        { id: 1, url: "https://placehold.co/600x600.png", alt: "Vanilla protein powder", hint: "vanilla extract" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Scoop of vanilla powder", hint: "scoop powder" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle fitness", hint: "lifestyle fitness" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Protein drink bottle", hint: "drink bottle" },
      ],
      orange: [
        { id: 1, url: "https://placehold.co/600x600.png", alt: "Orange protein powder", hint: "orange slice" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Scoop of orange powder", hint: "scoop powder" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle fitness", hint: "lifestyle fitness" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Protein drink bottle", hint: "drink bottle" },
      ],
    } as Record<Flavor | 'default', ProductImage[]>,
  },
  {
    id: 2,
    slug: "shaker-bottle",
    name: "Shaker Bottle",
    basePrice: 12.99,
    type: 'simple',
    description: "The perfect companion for your protein shakes. Mixes ingredients smoothly without clumps.",
    images: {
      default: [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf8EPKVfLDLMdebLg54UcXDF2C8yhYHCWjKren3xavUiqOOyfWYsRxMbD5h--ZAA_-IX0lNso6CMVdmUz5uLnMvSUTO9VG1w8mTS4gozFdRHPCaqqe729AoQ", alt: "Shaker bottle", hint: "shaker bottle" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Shaker bottle in use", hint: "bottle action" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Shaker bottle parts", hint: "bottle components" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Shaker bottle lifestyle", hint: "fitness lifestyle" },
      ]
    }
  },
  {
    id: 3,
    slug: "energy-bar",
    name: "Energy Bar (Box of 12)",
    basePrice: 24.99,
    type: 'simple',
    description: "A delicious and nutritious energy bar to fuel your workouts or as a healthy snack. Box of 12.",
    images: {
      default: [
        { id: 1, url: "https://4degreesu.com/cdn/shop/files/Original_Nutrition_Bar.jpg?v=1752563087&width=900", alt: "Energy bar", hint: "energy bar" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Energy bar broken", hint: "snack bar" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Box of energy bars", hint: "product box" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Person eating energy bar", hint: "person eating" },
      ]
    }
  },
  {
    id: 4,
    slug: "vitamins-pack",
    name: "Vitamins Pack",
    basePrice: 29.99,
    type: 'simple',
    description: "A comprehensive multivitamin pack to support your overall health and wellness.",
    images: {
      default: [
        { id: 1, url: "https://www.nutrabliss.in/cdn/shop/files/WhatsApp_Image_2024-08-21_at_2.46.25_PM.jpg?v=1724231953", alt: "Vitamins pack", hint: "vitamin pills" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Vitamin pills close-up", hint: "pills macro" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Vitamins bottle", hint: "supplement bottle" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Healthy lifestyle with vitamins", hint: "health wellness" },
      ]
    }
  },
  {
    id: 5,
    slug: "workout-t-shirt",
    name: "Workout T-Shirt",
    basePrice: 20.00,
    type: 'simple',
    description: "A comfortable and breathable t-shirt, perfect for your most intense workout sessions.",
    images: {
      default: [
        { id: 1, url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1rSYBuyDCTYE3CgDtBjhlTst3Im7wZUpfjeukyLiDJlkvkly7r1qqv0nipvIPHVR4BOqBHIiqcFCEvl8v7xWS0ljsXjWcgdh0IdjTZhXs3NIh496bTweK", alt: "Workout t-shirt", hint: "grey t-shirt" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "T-shirt fabric detail", hint: "fabric texture" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Person wearing t-shirt", hint: "fitness model" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "T-shirt folded", hint: "folded shirt" },
      ]
    }
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
