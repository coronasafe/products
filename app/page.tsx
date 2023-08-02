import Hero from "./Hero";
import ProductCloud from "./ProductCloud";
import ProductDetails from "./ProductDetails";
import products from "../lib/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCloud products={products} />
      <ProductDetails products={products} />
    </main>
  );
}
