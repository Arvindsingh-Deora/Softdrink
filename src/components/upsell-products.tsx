"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { CartItem } from "@/components/providers/cart-provider";
import { useToast } from "@/hooks/use-toast";

const relatedProducts = [
  {
    id: 1,
    name: "Shaker Bottle",
    price: 12.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf8EPKVfLDLMdebLg54UcXDF2C8yhYHCWjKren3xavUiqOOyfWYsRxMbD5h--ZAA_-IX0lNso6CMVdmUz5uLnMvSUTO9VG1w8mTS4gozFdRHPCaqqe729AoQ",
    hint: "shaker bottle",
  },
  {
    id: 2,
    name: "Energy Bar (Box of 12)",
    price: 24.99,
    image: "https://4degreesu.com/cdn/shop/files/Original_Nutrition_Bar.jpg?v=1752563087&width=900",
    hint: "energy bar",
  },
  {
    id: 3,
    name: "Vitamins Pack",
    price: 29.99,
    image: "https://www.nutrabliss.in/cdn/shop/files/WhatsApp_Image_2024-08-21_at_2.46.25_PM.jpg?v=1724231953",
    hint: "vitamin pills",
  },
   {
    id: 4,
    name: "Workout T-Shirt",
    price: 20.00,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1rSYBuyDCTYE3CgDtBjhlTst3Im7wZUpfjeukyLiDJlkvkly7r1qqv0nipvIPHVR4BOqBHIiqcFCEvl8v7xWS0ljsXjWcgdh0IdjTZhXs3NIh496bTweK",
    hint: "grey t-shirt",
  },
];

export default function UpsellProducts() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof relatedProducts[0]) => {
    const cartItem: Omit<CartItem, 'id'> = {
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      purchaseType: 'simple',
    };
    addItem(cartItem);
    toast({
      title: "Added to cart",
      description: `1x ${product.name}`,
    });
  };

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-headline font-bold text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={product.hint}
                  unoptimized
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="secondary" className="w-full" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
