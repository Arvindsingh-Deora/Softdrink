import ProductPage from "@/components/product-page";
import { getProduct, getProducts } from "@/lib/products";

type ProductRouteProps = {
  params: {
    slug: string;
  };
};

export default function ProductRoute({ params }: ProductRouteProps) {
  const product = getProduct(params.slug);
  const allProducts = getProducts();

  if (!product) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold">Product not found</h1>
        <p className="text-muted-foreground">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return <ProductPage product={product} allProducts={allProducts} />;
}
