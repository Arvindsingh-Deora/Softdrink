"use client";

import * as React from "react";
import Image from "next/image";
import {
  Minus,
  Plus,
  Heart,
  ShoppingCart,
  Gift,
  Truck,
  Repeat,
  Leaf,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import type { CartItem } from "@/components/providers/cart-provider";
import UpsellProducts from "@/components/upsell-products";
import { cn } from "@/lib/utils";
import type { Product, Flavor, PurchaseType, Bundle, ProductImage } from "@/lib/products";

type ProductPageProps = {
  product: Product;
  allProducts: Product[];
};

export default function ProductPage({ product, allProducts }: ProductPageProps) {
  const [purchaseType, setPurchaseType] = React.useState<PurchaseType>("subscription");
  const [bundle, setBundle] = React.useState<Bundle>("single");
  const [flavor1, setFlavor1] = React.useState<Flavor>("chocolate");
  const [flavor2, setFlavor2] = React.useState<Flavor>("vanilla");
  const [quantity, setQuantity] = React.useState(1);
  const [mainImage, setMainImage] = React.useState(product.images.default[0]);

  const { toast } = useToast();
  const { addItem } = useCart();
  
  // Reset state when product changes
  React.useEffect(() => {
    if (product.type === 'complex') {
        const defaultFlavor = product.flavors?.[0]?.id ?? 'chocolate';
        setFlavor1(defaultFlavor);
        setMainImage(product.images[defaultFlavor]?.[0] ?? product.images.default[0]);
    } else {
        setMainImage(product.images.default[0]);
    }
    setQuantity(1);
    setPurchaseType('subscription');
    setBundle('single');
  }, [product]);

  React.useEffect(() => {
    if (product.type === 'complex' && product.images[flavor1]) {
      setMainImage(product.images[flavor1][0]);
    }
  }, [flavor1, product]);

  const handleAddToCart = () => {
    const item: Omit<CartItem, 'id'> = {
      name: product.name,
      price: finalPrice,
      image: mainImage.url,
      quantity,
      purchaseType: product.type === 'simple' ? 'simple' : purchaseType,
      bundle: product.type === 'complex' ? bundle : undefined,
      flavor1: product.type === 'complex' ? flavor1 : undefined,
      flavor2: product.type === 'complex' && bundle === "double" ? flavor2 : undefined,
    };
    addItem(item);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name}`,
    });
  };
  
  const currentPriceInfo = React.useMemo(() => {
    let currentBase = product.basePrice;
    if (product.type === 'complex' && bundle === 'double') {
        currentBase *= 2;
    }
    
    const originalPrice = currentBase;
    const oneTimePrice = product.type === 'complex' ? originalPrice * 0.8 : originalPrice; // 20% off for complex
    const subscriptionPrice = product.type === 'complex' ? (originalPrice * 0.75) * 0.8 : originalPrice; // 25% + 20% off for complex

    return {
      oneTime: oneTimePrice,
      subscription: subscriptionPrice,
      original: originalPrice,
    };
  }, [bundle, product]);

  const finalPrice = product.type === 'simple' 
    ? product.basePrice 
    : (purchaseType === "subscription" ? currentPriceInfo.subscription : currentPriceInfo.oneTime);
    
  const currentThumbnails: ProductImage[] = product.type === 'complex' && product.images[flavor1] 
    ? product.images[flavor1] 
    : product.images.default;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={mainImage.url}
              alt={mainImage.alt}
              fill
              className="object-cover"
              data-ai-hint={mainImage.hint}
              unoptimized
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {currentThumbnails.map((image) => (
              <button
                key={image.id}
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-md transition-all",
                  mainImage.id === image.id ? "ring-2 ring-primary ring-offset-2" : "opacity-75 hover:opacity-100"
                )}
                onClick={() => setMainImage(image)}
              >
                <Image src={image.url} alt={image.alt} fill className="object-cover" data-ai-hint={image.hint} unoptimized />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">{product.name}</h1>
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold text-primary">${(finalPrice * quantity).toFixed(2)}</span>
            {product.type === 'complex' && <span className="text-2xl text-muted-foreground line-through">${(currentPriceInfo.original * quantity).toFixed(2)}</span>}
          </div>
          
          {product.type === 'complex' && product.flavors && (
            <>
              <Tabs value={purchaseType} onValueChange={(v) => setPurchaseType(v as PurchaseType)} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="one-time">One-Time Purchase</TabsTrigger>
                  <TabsTrigger value="subscription">Subscribe & Save 25%</TabsTrigger>
                </TabsList>
              </Tabs>

              <Card>
                <CardContent className="p-6">
                  <RadioGroup value={bundle} onValueChange={(v) => setBundle(v as Bundle)} className="space-y-4">
                    <Label htmlFor="single" className="flex items-center justify-between p-4 border rounded-md cursor-pointer has-[:checked]:bg-secondary has-[:checked]:border-primary">
                      <span>Single Drink</span>
                      <RadioGroupItem value="single" id="single" />
                    </Label>
                    <Label htmlFor="double" className="flex items-center justify-between p-4 border rounded-md cursor-pointer has-[:checked]:bg-secondary has-[:checked]:border-primary">
                      <span>Double Drink</span>
                      <RadioGroupItem value="double" id="double" />
                    </Label>
                  </RadioGroup>
                </CardContent>
              </Card>

              <div className={cn("grid gap-4", bundle === "double" ? "grid-cols-2" : "grid-cols-1")}>
                <div className="space-y-2">
                  <Label htmlFor="flavor1">Flavor</Label>
                  <Select value={flavor1} onValueChange={(v) => setFlavor1(v as Flavor)}>
                    <SelectTrigger id="flavor1">
                      <SelectValue placeholder="Select flavor" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.flavors.map((f) => (
                        <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {bundle === 'double' && (
                  <div className="space-y-2">
                    <Label htmlFor="flavor2">Flavor 2</Label>
                    <Select value={flavor2} onValueChange={(v) => setFlavor2(v as Flavor)}>
                      <SelectTrigger id="flavor2">
                        <SelectValue placeholder="Select flavor" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.flavors.map((f) => (
                          <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </>
          )}
          
          <div className="flex items-center gap-4">
             <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></Button>
             </div>
             <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
             </Button>
             <Button variant="outline" size="icon"><Heart className="h-5 w-5" /></Button>
          </div>

          {product.type === 'complex' && (
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2"><Gift className="h-5 w-5 text-primary"/><span>Free gift in every order</span></div>
                  <div className="flex items-center gap-2"><Truck className="h-5 w-5 text-primary"/><span>Free shipping always</span></div>
                  <div className="flex items-center gap-2"><Repeat className="h-5 w-5 text-primary"/><span>{purchaseType === 'subscription' ? 'Delivered every 30 days' : 'One-time delivery'}</span></div>
                  <div className="flex items-center gap-2"><Leaf className="h-5 w-5 text-primary"/><span>Natural ingredients</span></div>
              </CardContent>
            </Card>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent>
                {product.description}
              </AccordionContent>
            </AccordionItem>
            {product.ingredients && (
                <AccordionItem value="item-2">
                <AccordionTrigger>Ingredients</AccordionTrigger>
                <AccordionContent>
                    {product.ingredients}
                </AccordionContent>
                </AccordionItem>
            )}
            {product.nutrition && (
                <AccordionItem value="item-3">
                <AccordionTrigger>Nutritional Facts</AccordionTrigger>
                <AccordionContent>
                    {product.nutrition}
                </AccordionContent>
                </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>
      <UpsellProducts allProducts={allProducts} currentProductSlug={product.slug} />
    </div>
  );
}
