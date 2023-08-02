import { Product } from "../lib/products";

export default function ProductCloud({ products }: { products: Product[] }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-200">
          Crafted by the community
        </h2>
        <ul className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {products.map((product) => (
            <li key={product.repo}>
              <a href={product.github} target="_blank" rel="noreferrer">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 invert brightness-0"
                  src={product.image}
                  alt={product.name}
                  width="158"
                  height="48"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
