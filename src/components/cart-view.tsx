"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CartView() {
  const { items, removeItem, updateQuantity, subtotal, totalItems, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    clearCart();
    router.push('/order-confirmed');
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h2 className="mt-6 text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        {items.map((item) => (
          <Card key={item.id} className="flex items-center p-4">
            <div className="relative h-24 w-24 rounded-md overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">
                {item.bundle ? `${item.bundle} / ` : ''}{item.purchaseType.replace('-', ' ')}
              </p>
              {item.flavor1 && (
                <p className="text-sm text-muted-foreground capitalize">
                  {item.flavor1}{item.flavor2 && `, ${item.flavor2}`}
                </p>
              )}
               <p className="font-semibold mt-1">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <Button variant="outline" size="icon" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal ({totalItems} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" onClick={handleCheckout}>Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
