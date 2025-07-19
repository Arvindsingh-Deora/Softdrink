import CartView from "@/components/cart-view";
import UpsellProducts from "@/components/upsell-products";
import { Separator } from "@/components/ui/separator";
import { getProducts } from "@/lib/products";

export default function CartPage() {
  const allProducts = getProducts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-headline font-bold mb-6">Your Cart</h1>
      <CartView />
      <Separator className="my-12"/>
      <UpsellProducts allProducts={allProducts} currentProductSlug="" />
    </div>
  );
}
