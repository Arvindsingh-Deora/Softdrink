export type Flavor = "chocolate" | "vanilla" | "orange";
export type PurchaseType = "one-time" | "subscription";
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
  type: 'complex';
  images: ProductImages;
  flavors: { id: Flavor; name: string }[];
  ingredients: string;
  nutrition: string;
}

const products: Product[] = [
  {
    id: 1,
    slug: "juice-powder",
    name: "Performance Juice",
    basePrice: 40,
    type: 'complex',
    description: "Our Performance Juice is designed for optimal performance and recovery. Made with high-quality, all-natural ingredients to help you achieve your fitness goals.",
    ingredients: "Natural Fruit Powders, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 0g. Carbs: 28g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [{ id: 1, url: "https://static.thcdn.com/productimg/original/11654605-1275212429129161.jpg", alt: "Chocolate juice powder", hint: "juice powder" }],
      chocolate: [
        { id: 1, url: "https://static.thcdn.com/productimg/original/11654605-1275212429129161.jpg", alt: "Chocolate juice powder", hint: "juice powder" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Scoop of chocolate powder", hint: "scoop powder" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle fitness", hint: "lifestyle fitness" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Juice drink bottle", hint: "drink bottle" },
      ],
      vanilla: [
        { id: 1, url: "https://placehold.co/600x600.png", alt: "Vanilla juice powder", hint: "vanilla extract" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Scoop of vanilla powder", hint: "scoop powder" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle fitness", hint: "lifestyle fitness" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Juice drink bottle", hint: "drink bottle" },
      ],
      orange: [
        { id: 1, url: "https://placehold.co/600x600.png", alt: "Orange juice powder", hint: "orange slice" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Scoop of orange powder", hint: "scoop powder" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle fitness", hint: "lifestyle fitness" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Juice drink bottle", hint: "drink bottle" },
      ],
    } as Record<Flavor | 'default', ProductImage[]>,
  },
  {
    id: 2,
    slug: "shaker-juice",
    name: "Shaker Juice",
    basePrice: 12.99,
    type: 'complex',
    description: "The perfect companion for your juices. Mixes ingredients smoothly without clumps.",
    ingredients: "Natural Fruit Powders, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 0g. Carbs: 28g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf8EPKVfLDLMdebLg54UcXDF2C8yhYHCWjKren3xavUiqOOyfWYsRxMbD5h--ZAA_-IX0lNso6CMVdmUz5uLnMvSUTO9VG1w8mTS4gozFdRHPCaqqe729AoQ", alt: "Shaker bottle", hint: "shaker bottle" },
      ],
      chocolate: [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf8EPKVfLDLMdebLg54UcXDF2C8yhYHCWjKren3xavUiqOOyfWYsRxMbD5h--ZAA_-IX0lNso6CMVdmUz5uLnMvSUTO9VG1w8mTS4gozFdRHPCaqqe729AoQ", alt: "Shaker bottle", hint: "shaker bottle" },
      ],
      vanilla: [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf8EPKVfLDLMdebLg54UcXDF2C8yhYHCWjKren3xavUiqOOyfWYsRxMbD5h--ZAA_-IX0lNso6CMVdmUz5uLnMvSUTO9VG1w8mTS4gozFdRHPCaqqe729AoQ", alt: "Shaker bottle", hint: "shaker bottle" },
      ],
      orange: [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf8EPKVfLDLMdebLg54UcXDF2C8yhYHCWjKren3xavUiqOOyfWYsRxMbD5h--ZAA_-IX0lNso6CMVdmUz5uLnMvSUTO9VG1w8mTS4gozFdRHPCaqqe729AoQ", alt: "Shaker bottle", hint: "shaker bottle" },
      ]
    }
  },
  {
    id: 3,
    slug: "energy-juice",
    name: "Energy Juice (Box of 12)",
    basePrice: 24.99,
    type: 'complex',
    description: "A delicious and nutritious energy juice to fuel your workouts or as a healthy snack. Box of 12.",
    ingredients: "Natural Fruit Powders, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 0g. Carbs: 28g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [
        { id: 1, url: "https://4degreesu.com/cdn/shop/files/Original_Nutrition_Bar.jpg?v=1752563087&width=900", alt: "Energy juice", hint: "energy juice" },
      ],
      chocolate: [
        { id: 1, url: "https://4degreesu.com/cdn/shop/files/Original_Nutrition_Bar.jpg?v=1752563087&width=900", alt: "Energy juice", hint: "energy juice" },
      ],
      vanilla: [
        { id: 1, url: "https://4degreesu.com/cdn/shop/files/Original_Nutrition_Bar.jpg?v=1752563087&width=900", alt: "Energy juice", hint: "energy juice" },
      ],
      orange: [
        { id: 1, url: "https://4degreesu.com/cdn/shop/files/Original_Nutrition_Bar.jpg?v=1752563087&width=900", alt: "Energy juice", hint: "energy juice" },
      ]
    }
  },
  {
    id: 4,
    slug: "vitamins-juice",
    name: "Vitamins Juice",
    basePrice: 29.99,
    type: 'complex',
    description: "A comprehensive multivitamin juice to support your overall health and wellness.",
    ingredients: "Natural Fruit Powders, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 0g. Carbs: 28g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [
        { id: 1, url: "https://www.nutrabliss.in/cdn/shop/files/WhatsApp_Image_2024-08-21_at_2.46.25_PM.jpg?v=1724231953", alt: "Vitamins juice", hint: "vitamin pills" },
      ],
       chocolate: [
        { id: 1, url: "https://www.nutrabliss.in/cdn/shop/files/WhatsApp_Image_2024-08-21_at_2.46.25_PM.jpg?v=1724231953", alt: "Vitamins juice", hint: "vitamin pills" },
      ],
       vanilla: [
        { id: 1, url: "https://www.nutrabliss.in/cdn/shop/files/WhatsApp_Image_2024-08-21_at_2.46.25_PM.jpg?v=1724231953", alt: "Vitamins juice", hint: "vitamin pills" },
      ],
       orange: [
        { id: 1, url: "https://www.nutrabliss.in/cdn/shop/files/WhatsApp_Image_2024-08-21_at_2.46.25_PM.jpg?v=1724231953", alt: "Vitamins juice", hint: "vitamin pills" },
      ]
    }
  },
  {
    id: 5,
    slug: "workout-juice",
    name: "Workout Juice",
    basePrice: 20.00,
    type: 'complex',
    description: "A comfortable and breathable juice, perfect for your most intense workout sessions.",
    ingredients: "Natural Fruit Powders, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 0g. Carbs: 28g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [
        { id: 1, url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1rSYBuyDCTYE3CgDtBjhlTst3Im7wZUpfjeukyLiDJlkvkly7r1qqv0nipvIPHVR4BOqBHIiqcFCEvl8v7xWS0ljsXjWcgdh0IdjTZhXs3NIh496bTweK", alt: "Workout juice", hint: "grey t-shirt" },
      ],
      chocolate: [
        { id: 1, url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1rSYBuyDCTYE3CgDtBjhlTst3Im7wZUpfjeukyLiDJlkvkly7r1qqv0nipvIPHVR4BOqBHIiqcFCEvl8v7xWS0ljsXjWcgdh0IdjTZhXs3NIh496bTweK", alt: "Workout juice", hint: "grey t-shirt" },
      ],
      vanilla: [
        { id: 1, url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1rSYBuyDCTYE3CgDtBjhlTst3Im7wZUpfjeukyLiDJlkvkly7r1qqv0nipvIPHVR4BOqBHIiqcFCEvl8v7xWS0ljsXjWcgdh0IdjTZhXs3NIh496bTweK", alt: "Workout juice", hint: "grey t-shirt" },
      ],
      orange: [
        { id: 1, url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1rSYBuyDCTYE3CgDtBjhlTst3Im7wZUpfjeukyLiDJlkvkly7r1qqv0nipvIPHVR4BOqBHIiqcFCEvl8v7xWS0ljsXjWcgdh0IdjTZhXs3NIh496bTweK", alt: "Workout juice", hint: "grey t-shirt" },
      ],
    }
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
