import productsJson from "../products.json";

const products = productsJson.map((product) => ({
  ...product,
  image: `/logos/${product.repo}.svg`,
  bg_image: `/logos/${product.repo}_bg.svg`,
  github: `https://github.com/coronasafe/${product.repo}`,
}));

export type Product = (typeof products)[0];

export default products;
