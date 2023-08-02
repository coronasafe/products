import productsJson from "@/public/products.json";
import { ArrayElement } from "./utils";

const products = productsJson.map((product) => ({
  ...product,
  image: `/logos/${product.repo}.svg`,
  bg_image: `/logos/${product.repo}_bg.svg`,
  github: `https://github.com/coronasafe/${product.repo}`,
}));

export type Product = ArrayElement<typeof products>;

export default products;
