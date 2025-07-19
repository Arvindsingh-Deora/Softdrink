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
    slug: "jablonski-spritz",
    name: "Jablonski Spritz",
    basePrice: 40,
    type: 'complex',
    description: "A refreshing and vibrant spritz, perfect for any occasion. Made with high-quality, all-natural ingredients.",
    ingredients: "Natural Fruit Essences, Sparkling Water, Stevia Extract, Natural Flavors.",
    nutrition: "Serving Size: 1 Can (355ml). Calories: 5. Protein: 0g. Carbs: 1g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [{ id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/jablonski-spritz-661e8f12da149.jpg?crop=0.668xw:1.00xh;0.0952xw,0&resize=980:*", alt: "Jablonski Spritz", hint: "cocktail drink" }],
      chocolate: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/jablonski-spritz-661e8f12da149.jpg?crop=0.668xw:1.00xh;0.0952xw,0&resize=980:*", alt: "Jablonski Spritz", hint: "cocktail drink" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Garnish", hint: "garnish fruit" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle with drink", hint: "lifestyle drink" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Drink bottle", hint: "drink bottle" },
      ],
      vanilla: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/jablonski-spritz-661e8f12da149.jpg?crop=0.668xw:1.00xh;0.0952xw,0&resize=980:*", alt: "Jablonski Spritz", hint: "cocktail drink" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Garnish", hint: "garnish fruit" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle with drink", hint: "lifestyle drink" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Drink bottle", hint: "drink bottle" },
      ],
      orange: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/jablonski-spritz-661e8f12da149.jpg?crop=0.668xw:1.00xh;0.0952xw,0&resize=980:*", alt: "Jablonski Spritz", hint: "cocktail drink" },
        { id: 2, url: "https://placehold.co/100x100.png", alt: "Garnish", hint: "garnish fruit" },
        { id: 3, url: "https://placehold.co/100x100.png", alt: "Lifestyle with drink", hint: "lifestyle drink" },
        { id: 4, url: "https://placehold.co/100x100.png", alt: "Drink bottle", hint: "drink bottle" },
      ],
    } as Record<Flavor | 'default', ProductImage[]>,
  },
  {
    id: 2,
    slug: "eastside-garden",
    name: "Eastside Garden",
    basePrice: 12.99,
    type: 'complex',
    description: "A garden-fresh mocktail with herbal notes. Mixes ingredients smoothly without clumps.",
    ingredients: "Natural Fruit Powders, Natural Flavors, Stevia Extract, Sunflower Lecithin.",
    nutrition: "Serving Size: 1 Scoop (30g). Calories: 120. Protein: 0g. Carbs: 28g. Fat: 0g.",
    flavors: [
      { id: "chocolate", name: "Chocolate" },
      { id: "vanilla", name: "Vanilla" },
      { id: "orange", name: "Orange" },
    ],
    images: {
      default: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/espresso-notini-nick-stefs-661e92f24950f.jpg?crop=1.00xw:0.667xh;0,0.160xh&resize=980:*", alt: "Eastside Garden", hint: "espresso drink" },
      ],
      chocolate: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/espresso-notini-nick-stefs-661e92f24950f.jpg?crop=1.00xw:0.667xh;0,0.160xh&resize=980:*", alt: "Eastside Garden", hint: "espresso drink" },
      ],
      vanilla: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/espresso-notini-nick-stefs-661e92f24950f.jpg?crop=1.00xw:0.667xh;0,0.160xh&resize=980:*", alt: "Eastside Garden", hint: "espresso drink" },
      ],
      orange: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/espresso-notini-nick-stefs-661e92f24950f.jpg?crop=1.00xw:0.667xh;0,0.160xh&resize=980:*", alt: "Eastside Garden", hint: "espresso drink" },
      ]
    }
  },
  {
    id: 3,
    slug: "sparkling-hugo-spritz",
    name: "Non-Alcoholic Sparkling Hugo Spritz",
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
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-josh-cellars-non-alcoholic-sparkling-hugo-spritz-2-67b4c4b9c8ced.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=980:*", alt: "Sparkling Hugo Spritz", hint: "sparkling juice" },
      ],
      chocolate: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-josh-cellars-non-alcoholic-sparkling-hugo-spritz-2-67b4c4b9c8ced.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=980:*", alt: "Sparkling Hugo Spritz", hint: "sparkling juice" },
      ],
      vanilla: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-josh-cellars-non-alcoholic-sparkling-hugo-spritz-2-67b4c4b9c8ced.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=980:*", alt: "Sparkling Hugo Spritz", hint: "sparkling juice" },
      ],
      orange: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-josh-cellars-non-alcoholic-sparkling-hugo-spritz-2-67b4c4b9c8ced.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=980:*", alt: "Sparkling Hugo Spritz", hint: "sparkling juice" },
      ]
    }
  },
  {
    id: 4,
    slug: "sin-city-sober",
    name: "Sin City Sober",
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
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-sin-city-sober-westgate-las-vegas-661e91a18d97b.jpg?crop=0.668xw:1.00xh;0.281xw,0&resize=980:*", alt: "Sin City Sober", hint: "cocktail glass" },
      ],
       chocolate: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-sin-city-sober-westgate-las-vegas-661e91a18d97b.jpg?crop=0.668xw:1.00xh;0.281xw,0&resize=980:*", alt: "Sin City Sober", hint: "cocktail glass" },
      ],
       vanilla: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-sin-city-sober-westgate-las-vegas-661e91a18d97b.jpg?crop=0.668xw:1.00xh;0.281xw,0&resize=980:*", alt: "Sin City Sober", hint: "cocktail glass" },
      ],
       orange: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-sin-city-sober-westgate-las-vegas-661e91a18d97b.jpg?crop=0.668xw:1.00xh;0.281xw,0&resize=980:*", alt: "Sin City Sober", hint: "cocktail glass" },
      ]
    }
  },
  {
    id: 5,
    slug: "magic-apple",
    name: "Magic Apple",
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
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-ritual-magic-apple-1603382050.jpg?crop=0.448xw:1.00xh;0.265xw,0&resize=980:*", alt: "Magic Apple", hint: "apple drink" },
      ],
      chocolate: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-ritual-magic-apple-1603382050.jpg?crop=0.448xw:1.00xh;0.265xw,0&resize=980:*", alt: "Magic Apple", hint: "apple drink" },
      ],
      vanilla: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-ritual-magic-apple-1603382050.jpg?crop=0.448xw:1.00xh;0.265xw,0&resize=980:*", alt: "Magic Apple", hint: "apple drink" },
      ],
      orange: [
        { id: 1, url: "https://hips.hearstapps.com/hmg-prod/images/web-ritual-magic-apple-1603382050.jpg?crop=0.448xw:1.00xh;0.265xw,0&resize=980:*", alt: "Magic Apple", hint: "apple drink" },
      ],
    }
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  if (slug === 'juice-powder') {
    return products.find((product) => product.slug === 'jablonski-spritz');
  }
  return products.find((product) => product.slug === slug);
}
