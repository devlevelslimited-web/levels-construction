import Link from "next/link";
import VideoView from "../NextCloudinary/VideoView";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[80dvh] w-full overflow-hidden">
        {/* Desktop Background video */}
        <div className=" hidden md:block absolute top-0 left-0 w-full h-full z-0">
          <VideoView
            videoSrc="4790141_Building_Working_1280x720_kffqhy"
            width={1920}
            height={1280}
            autoplay="always"
            muted={true}
            loop={true}
            controls={false}
            playsinline={true}
            classNames="w-full h-full object-cover bg-left"
            transformations={{
              crop: "fill",
              aspect: "16.10",
              width: 1920,
              height: 1280,
            }}
          />
        </div>
        {/* Mobi Background video */}
        <div className="block md:hidden absolute top-0 left-0 w-full h-full z-0">
          <VideoView
            videoSrc="4790141_Building_Working_1280x720_kffqhy"
            width={1080}
            height={1920}
            autoplay="always"
            muted={true}
            loop={true}
            controls={false}
            playsinline={true}
            classNames="w-full h-full object-cover bg-left"
            transformations={{
              crop: "fill",
              aspect: "9.16",
              width: 1080,
              height: 1920,
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-900/85 backdrop-blur-xs z-10" />

        {/* Foreground content */}
        <div className="relative z-20 container mx-auto flex min-h-[80dvh] items-center px-4 py-10">
          <div className="max-w-5xl mx-auto  space-y-6 text-slate-50">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Expert Construction Solutions for Kenya&apos;s Leading Industries
            </h1>
            <p className="max-w-5xl text-lg md:text-xl font-semibold leading-8 text-balance">
              Level Services Limited Limited delivers exceptional construction
              and engineering services tailored for the Kenyan market. Our
              unwavering commitment to quality, safety, and timely delivery
              ensures your projects are completed to the highest standards
            </p>
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-teal-500 px-12 py-8  text-xl text-slate-100 hover:bg-teal-400 hover:text-black hover:scale-110"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
