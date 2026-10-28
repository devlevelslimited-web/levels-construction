export default function HeroSection() {
  return (
    <section className="min-h-[80dvh] bg-teal-100 w-full bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1792145951/homeHeroImg_y1ghvh.jpg')] bg-cover bg-center bg-no-repeat bg">
      <div className="min-h-[80dvh] bg-teal-900/85 backdrop-blur-sm relative">
        <div className="min-h-[80dvh] grid place-content-center container text-slate-100 mx-auto px-3 py-10 space-y-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl  md:text-5xl lg:text-7xl font-bold">
              Building Future Solutions, <br /> One Project at a Time
            </h1>
          </div>
          <div className="max-w-4xl mx-auto text-start md:text-">
            <p className="text-lg text-balance md:ml-18 lg:ml-20 font-semibold leading-8">
              {/* At Level Services Limited, we are more than just builders-we
              are your trusted partners in shaping Kenya&apos;s skylines and
              communities. With years of experience in the construction and
              engineering sector, our team is dedicated to delivering
              innovative, reliable, and sustainable solutions tailored to the
              unique needs of our clients */}
              Level Services Limited Limited is an engineering, procurement, and
              construction (EPC) company operating in the infrastructure and
              energy sectors. Established to meet the growing demand for
              specialized expertise in oil and gas. We have since expanded our
              focus to general infrastructure construction, clean and
              sustainable energy solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
