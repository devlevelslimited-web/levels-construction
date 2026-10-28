"use client";

import ImageView from "../NextCloudinary/ImageView";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectImageCarousel({ images }: { images: string[] }) {
  return (
    <>
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent >
          {images.map((image) => (
            <CarouselItem key={image} >
              <ImageView
                imageSrc={image}
                height={900}
                width={800}
                alt="project image"
                // classNames="object-cover bg-center md:rounded-l-md w-full h-[70dvh] 2xl:h-[55dvh]"
                classNames="object-cover object-center rounded-t-md md:rounded-t-none md:rounded-l-md w-full bg-teal-100 min-h-[75dvh] lg:h-[80dvh] 2xl:h-[85dvh]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
