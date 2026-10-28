import ImageView from "@/components/NextCloudinary/ImageView";
import { Button } from "@/components/ui/button";
import { products } from "@/staticData/ProductsPage/Products";

import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const Item = products.find((item) => item.id == parseInt(product));

  const productItems=products.filter((item)=>item.id!==parseInt(product))
  // const relatedProducts = products.slice(0, 5);
  const relatedProducts = productItems.sort(()=>0.5-Math.random()).slice(0,5);

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {Item != undefined ? (
          <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8 border-2 rounded-lg">
            <div className="w-full md:w-5/12  space-y-12">
              <p className="text-2xl text-center lg:text-4xl font-semibold pt-10">{Item.title}</p>

              <ImageView
                imageSrc={Item.imagSrc}
                height={800}
                width={800}
                alt={Item.title}
                classNames="object-contain h-96 w-full bg-teall-50 hover:bg-teall-50 rounded-lg p-1"
              />
            </div>
            <div className="w-full md:w-6/12 ml-auto bg-teal-50 h-full md:min-h-[58dvh] lg:min-h-[52dvh]">
              <p className="text-sm pl-4 font-semibold hidden">About:</p>
              <p className="leading-7 ml-6 px-4 hidden">{Item.details}</p>
              <p className="text-lg pl-4 font-semibold mt-10 -mb-5">
                Equipment Overview:
              </p>
              <div
                className="py-8 px-4 prose prose-ul:list-disc prose-li:list-item leading-7 "
                dangerouslySetInnerHTML={{ __html: Item.moreDetails }}
              ></div>
              <div className="px-4 pb-8">
                <Link href={`https://wa.me/254111374343?text=Product%20inqury%20for%20%20${Item.model}`} target="_blank">
                  <Button variant="outline" className="w-40 text-lg hover:bg-teal-200">Inquire
                    <ImageView
                            imageSrc="whatsapp-transparent-icon"
                            height={40}
                            width={40}
                            alt="whatsapp icon"
                            classNames="object-cover hover:scale-105 hover:cursor-pointer duration-300 ease-in"
                            />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
        <div className=" pt-40 pl-0 ">
          <p className="text-xl font-bold pb-10">Related Products</p>
          <div className="flex flex-wrap justify-evenly items-start gap-x-2 gap-y-20">
            {relatedProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="w-5/12 md:w-3/12 lg:w-2/12"
              >
                <div className="shadow-md hover:shadow-teal-100 rounded-lg pb-10">
                  <ImageView
                    imageSrc={product.imagSrc}
                    height={800}
                    width={800}
                    alt={product.title}
                    classNames="object-contain h-64 w-full bg-teall-50 "
                  />
                  <div className="px-1 xl:px-8 pt-4">
                    <p className="text-sm  text-center font-semibold">
                      {product.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
