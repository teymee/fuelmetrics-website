import React from "react";

// ASSETS
import onyi from "@/assets/svg/onyi.svg";
import quote from "@/assets/svg/green-quote.svg";
import dots from "@/assets/svg/blue-dots.svg";
export default function Testimonial() {
  const testimonials = [
    {
      img: onyi,
      name: "John Doe",
      position: "Software Engineer",
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },

    {
      img: onyi,
      name: "John Doe",
      position: "Software Engineer",
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },
    {
      img: onyi,
      name: "John Doe",
      position: "Software Engineer",
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },
    {
      img: onyi,
      name: "John Doe",
      position: "Software Engineer",
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },
  ];
  return (
    <main>
      <section className="bg-white testimonial relative pt-20 pb-40">
        <img src={dots} alt="" className="absolute right-0 top-[10%] z-10" />
        <img src={dots} alt="" className="absolute left-0 bottom-10" />

        <section className="z-20 relative">
          <div className="text-center mx-auto ">
            <h2 className="[ lg:text-[56px] text-[28px] ] font-medium">
              Testimonials
            </h2>
            <p className="subHeader">Many reasons to be part of Fuelmetrics</p>
          </div>

          <article className="w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 mt-10">
            {testimonials.map((item, index) => {
              const { img, name, position, test } = item;
              return (
                <section
                  key={index}
                  className="bg-white shadow-2xl rounded-2xl p-8 space-y-4 "
                >
                  <div className="space-y-2">
                    <img
                      src={img}
                      alt=""
                      className="w-[3.875rem] h-[62px] rounded-full"
                    />
                    <h2 className="text-base font-semibold">{name}</h2>
                    <p className="text-sm text-white-900">{position}</p>
                  </div>

                  <hr className="text-white-600" />
                  <img src={quote} alt="" className="w-[27px]" />
                  <p className="text-base text-grey-300">{test}</p>
                </section>
              );
            })}
          </article>
        </section>
      </section>
    </main>
  );
}
