"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export default function SiteHeader() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold">
            Home Page
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
