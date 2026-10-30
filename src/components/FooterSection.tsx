import Link from "next/link";
import ImageView from "./NextCloudinary/ImageView";
import { companySocialLinks, linksOne, linksTwo } from "@/staticData/general";

export default function FooterSection() {
  return (
    <>
      <footer className="conatiner px-4 pt-20 pb-4">
        {/* <div className="flex justify-between items-center bg-green-800 text-slate-100 rounded-xl px-8 py-10"> */}
        <div className=" bg-teal-950 text-slate-100 rounded-xl px-8 py-10">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-y-8">
            <div className="w-full md:w-5/12 space-y-4">
              <Link href={`/`} className="flex items-center">
                <ImageView
                  imageSrc="levels_services_transparent_logo_only_zquhit"
                  height={400}
                  width={400}
                  alt=""
                  classNames="object-cover size-20"
                />
                <p className="font-semibold">Level Services Limited</p>
              </Link>
              <p className="text-3xl md:text-5xl leading-12">
                Your Trusted Partner <br />
                in Construction
              </p>
              <p className="text-xs">
                {/* Delivery excellence in trucking and transportation for the
                construction industry */}
              </p>
            </div>
            <div className="flex justify-between items-start gap-x-8 text-sm">
              <div className="c">
                <ul className="list-none  space-y-4">
                  {linksOne.map((link)=>(
                    <li key={link.id} className="hover:underline underline-offset-2">
                      <Link href={link.href}>{link.name}</Link>
                    </li>

                  ))}
                </ul>
              </div>
              <div className="c">
                <ul className="list-none space-y-4">
                  {linksTwo.map((link)=>(
                    <li key={link.id} className="hover:underline underline-offset-2">
                      <Link href={link.href}>{link.name}</Link>
                    </li>

                  ))}
                
                  
                </ul>
              </div>
          
            </div>
          </div>
            <div className="pt-20 flex justify-center items-center gap-4">
            {companySocialLinks.map((social)=>(
              <Link key={social.id} href={social.href} target="_blank" className="cursor-pointer ">
                <ImageView
                  imageSrc={social.iconImage}
                  height={20}
                  width={20}
                  alt={`${social.name} icon`}
                  classNames="object-contain size-8 p-1.5 bg-white hover:scale-110 rounded-lg "
                />
              </Link>

            ))}
          </div>
        </div>
        <div className="flex justify-between items-center text-xs gap-4 px-2 pt-4">
          <div className="c">
            <p>
              &#169; {new Date().getFullYear()} Level Construction. All rights
              reserved
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="underline underline-offset-2">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
