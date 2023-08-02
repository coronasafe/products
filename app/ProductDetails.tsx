import { Product } from "./products";

export default function ProductDetails({ products }: { products: Product[] }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-2 text-black">
          {products.map((product) => (
            <li key={product.repo}>
              <ProductDetail product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div
      //   href={product.github}
      //   target="_blank"
      //   rel="noreferrer"
      className="flex flex-col items-start justify-start gap-4 hover:bg-slate-100 rounded-lg transition-all duration-200 ease-in-out p-4"
    >
      <img
        className="max-h-64 w-full object-contain"
        src={product.bg_image}
        alt={product.name}
        width="158"
        height="48"
      />
    </div>
  );
};
