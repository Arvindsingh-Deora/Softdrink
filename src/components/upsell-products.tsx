"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import type { CartItem } from "@/components/providers/cart-provider";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/products";

type UpsellProductsProps = {
  allProducts: Product[];
  currentProductSlug: string;
};

export default function UpsellProducts({ allProducts, currentProductSlug }: UpsellProductsProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    const cartItem: Omit<CartItem, 'id'> = {
      name: product.name,
      price: product.basePrice,
      image: product.images.default[0].url,
      quantity: 1,
      purchaseType: 'simple',
    };
    addItem(cartItem);
    toast({
      title: "Added to cart",
      description: `1x ${product.name}`,
    });
  };

  const relatedProducts = allProducts.filter(p => p.slug !== currentProductSlug && p.slug !== 'protein-powder').slice(0, 4);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-headline font-bold text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
             <Link href={`/products/${product.slug}`} className="flex flex-col flex-grow">
              <CardHeader className="p-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={product.images.default[0].url}
                    alt={product.images.default[0].alt}
                    fill
                    className="object-cover"
                    data-ai-hint={product.images.default[0].hint}
                    unoptimized
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-muted-foreground">${product.basePrice.toFixed(2)}</p>
              </CardContent>
            </Link>
            <CardFooter className="p-4 pt-0">
              <Button variant="secondary" className="w-full" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
