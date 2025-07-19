import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const relatedProducts = [
  {
    id: 1,
    name: "Shaker Bottle",
    price: 12.99,
    image: "https://placehold.co/400x400.png",
    hint: "shaker bottle",
  },
  {
    id: 2,
    name: "Energy Bar (Box of 12)",
    price: 24.99,
    image: "https://placehold.co/400x400.png",
    hint: "energy bar",
  },
  {
    id: 3,
    name: "Vitamins Pack",
    price: 29.99,
    image: "https://placehold.co/400x400.png",
    hint: "vitamin pills",
  },
   {
    id: 4,
    name: "Workout T-Shirt",
    price: 20.00,
    image: "https://placehold.co/400x400.png",
    hint: "grey t-shirt",
  },
];

export default function UpsellProducts() {
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
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="secondary" className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
