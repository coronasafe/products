import { Product } from "../lib/products";

export default function ProductCloud({ products }: { products: Product[] }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-200">
          Crafted by the community
        </h2>
        <ul className="mx-auto mt-10 flex items-center justify-center flex-wrap gap-12">
          {products.map((product) => (
            <li key={product.repo}>
              <a href={product.github} target="_blank" rel="noreferrer">
                <img
                  className="max-h-12 w-40 h-12 object-contain lg:col-span-1 invert brightness-0"
                  src={product.image}
                  alt={product.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
