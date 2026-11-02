import { products } from "@/staticData/ProductsPage/Products";
import Link from "next/link";
import ImageView from "../NextCloudinary/ImageView";


export default function AllProcuctsSection() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-1 md:px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Our Equipment Offering
        </h1>
        <div className="flex flex-wrap justify-evenly items-start gap-x-1 gap-y-20 ">
          {products.map((product) => (
            <Link
              href={`equipment/${product.id}`}
              key={product.id}
              className="w-5/12  md:w-3/12 shadow-md hover:shadow-teal-100 rounded-lg pb-10"
              >
              <div >
                {/* <div className="w-full h-96 bg-teal-300 rounded-lg"></div> */}
                <ImageView
                  imageSrc={product.imagSrc}
                  height={800}
                  width={800}
                  alt={product.title}
                  // classNames="object-contain h-96 w-full bg-slate-100 hover:bg-slate-200 rounded-lg p-1"
                  classNames="object-contain h-96 w-full bg-teall-50   rounded-lg p-2"
                />
                <div className="px-1 md:px-8 pt-2">
                  {/* <p className="text-lg font-semibold">KSH</p> */}
                  <p className="text-sm md:text-lg text-center font-semibold">
                    {product.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
