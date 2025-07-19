"use client";

import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export default function SiteHeader() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="font-headline text-2xl font-bold">
            Home
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
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
