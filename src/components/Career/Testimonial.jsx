import React from "react";

// ASSETS
import onyi from "@/assets/svg/onyi.svg";
import somto from "@/assets/svg/somto.svg";
import oseni from "@/assets/svg/oseni.svg";
import sediq from "@/assets/svg/sediq.svg";
import quote from "@/assets/svg/green-quote.svg";
import dots from "@/assets/svg/blue-dots.svg";
import { useTranslator } from "@/hooks/useTranslator";
export default function Testimonial() {
  const t = useTranslator();
  const testimonials = [
    {
      img: onyi,
      name: "Onyinye Adeniyi",
      position: t("career.supportRep"),
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },

    {
      img: somto,
      name: "Somto Igwenagu",
      position: t("career.fieldEng"),
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },
    {
      img: oseni,
      name: "Oseni Ismaila",
      position: t("career.embedded"),
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },
    {
      img: sediq,
      name: "Abubakar Sediq",
      position: t("career.fieldEng"),
      test: "I watch my career grow while working at Fuelmetrics with a very friendly work environment",
    },
  ];
  return (
    <main>
      <section className="bg-[#FCFCFC] testimonial relative pt-20 pb-40">
        <img src={dots} alt="" className="absolute right-0 top-[10%] z-10" />
        <img src={dots} alt="" className="absolute left-0 bottom-10" />

        <section className="z-20 relative">
          <div className="text-center mx-auto ">
            <h2 className="[ lg:text-[56px] text-[28px] ] font-medium">
              {t("career.testimonials")}
            </h2>
            <p className="subHeader">{t("career.reasons")}</p>
          </div>

          <article className="w-[75%]  mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 mt-10">
            {testimonials.map((item, index) => {
              const { img, name, position, test } = item;
              return (
                <section
                  key={index}
                  className="bg-white  rounded-2xl p-8 space-y-4 "
                >
                  {/* shadow-2xl */}
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
