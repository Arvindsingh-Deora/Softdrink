import ProductPage from "@/components/product-page";
import { getProduct, getProducts } from "@/lib/products";

export default function Home() {
  const defaultProduct = getProduct("juice-powder");
  const allProducts = getProducts();

  if (!defaultProduct) {
    return <div>Product not found!</div>;
  }

  return <ProductPage product={defaultProduct} allProducts={allProducts} />;
}
