import SolidIcon from "@/lib/icons/SolidIcon";
import { Product } from "../lib/products";

export default function ProductDetails({ products }: { products: Product[] }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="mx-auto mt-10 flex flex-col max-w-lg items-center gap-y-4 sm:max-w-xl lg:max-w-5xl text-black">
          {products.map((product) => (
            <ProductDetail key={product.repo} product={product} />
          ))}
        </ul>
        {/* <ul className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-2 text-black">
          {products.map((product) => (
            <ProductDetail key={product.repo} product={product} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <li className="flex w-full flex-col lg:flex-row lg:even:flex-row-reverse items-center justify-between gap-6 lg:gap-14 hover:bg-fuchsia-50 rounded-lg transition-all duration-200 ease-in-out p-10">
      <img
        className="lg:max-w-[250px] w-full object-contain"
        src={product.bg_image}
        alt={product.name}
        width="158"
        height="48"
      />
      <div className="flex flex-col gap-4 justify-start">
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <p>{product.description}</p>

        {/* Product Tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <ProductTag key={tag} tag={tag} />
          ))}
        </div>

        {/* Product Links */}
        <div className="flex items-center gap-8">
          <a
            href={product.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-semibold leading-6 text-fuchsia-900 hover:text-fuchsia-600 transition-all duration-200 ease-in-out"
          >
            <SolidIcon
              icon="code-bracket"
              className="w-5 h-5 group-hover:scale-110 transition-all duration-200 ease-in-out"
            />
            GitHub
          </a>
          {product.api_docs && (
            <a
              href={product.api_docs}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold leading-6 text-fuchsia-900 hover:text-fuchsia-600 transition-all duration-200 ease-in-out"
            >
              <SolidIcon
                icon="book-open"
                className="w-5 h-5 group-hover:scale-110 transition-all duration-200 ease-in-out"
              />
              API Docs
            </a>
          )}
          <a
            href={product.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 hover:gap-4 text-sm font-semibold leading-6 text-fuchsia-900 hover:text-fuchsia-600 transition-all duration-200 ease-in-out"
          >
            <SolidIcon
              icon="rocket-launch"
              className="w-5 h-5 group-hover:rotate-45 transition-all duration-200 ease-in-out"
            />
            Preview
          </a>
        </div>
      </div>
    </li>
  );
};

const ProductTag = ({ tag }: { tag: string }) => {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-fuchsia-100 text-fuchsia-800">
      {tag}
    </span>
  );
};
