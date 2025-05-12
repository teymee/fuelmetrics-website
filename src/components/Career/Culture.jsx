import React from "react";

// ASSETS
import culture1 from "@/assets/svg/idea-bulb.svg";
import culture2 from "@/assets/svg/growth.svg";
import culture3 from "@/assets/svg/upward-graph.svg";
import curve1 from "@/assets/svg/culture-curve1.svg";
import globe from "@/assets/svg/globe.svg";
import { useTranslator } from "@/hooks/useTranslator";

export default function Culture() {
  const t = useTranslator();
  const culture = [
    {
      img: culture1,
      title: t("about.innovation"),
      desc: t("career.innoDesc"),
      link: "#",
    },
    {
      img: culture2,
      title: t("about.growth"),
      desc: t("career.growthDesc"),
      link: "#",
    },
    {
      img: culture3,
      title: t("about.collaboration"),
      desc: t("career.collabDesc"),
      link: "#",
    },
  ];
  return (
    <section className="container relative top-[-70px] overflow-hidden">
      <section className="bg-blue-300 py-10  rounded-4xl ">
        <section className="space-y-10 container">
          {/* First section  */}
          <div className="text-center relative z-10">
            <h1 className="header">{t("career.cultureValue")}</h1>
            <p className="text-G-900 [ lg:w-4/12 w-[90%] ] mx-auto text-base mt-4 italic ">
              {t("career.cultureDesc")}
            </p>
          </div>

          {/* Second section  */}
          <section className="flex gap-x-8 items-stretch relative  w-[90%] mx-auto [ lg:flex-row flex-col ] [ lg:gap-y-0 gap-y-8 ]">
            <img
              src={curve1}
              alt=""
              className="absolute z-0 lg:right-40 [  lg:top-[-200px]   top-[-200px]  ]"
            />
            <img
              src={curve1}
              alt=""
              className="absolute transform rotate-180 z-0 lg:right-[-300px] [  lg:top-[-150px]  ] hidden lg:block"
            />
            {culture.map((item, index) => {
              return (
                <section
                  key={index}
                  className="py-10 px-8 rounded-3xl  mx-auto bg-white/90 relative z-10"
                >
                  <img src={item.img} alt="" className="w-[50px] h-[50px]" />
                  <h2 className="text-[1.5rem] text-black font-semibold mt-2">
                    {item.title}
                  </h2>
                  <p className="text-base text-grey-900 mt-4">{item.desc}</p>
                  <p className="flex-items-center rounded-full bg-primary w-fit gap-x-2 px-8 py-1 mt-8 font-medium text-white">
                    <span>Explore </span>
                    <img src={globe} alt="" />
                  </p>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}
