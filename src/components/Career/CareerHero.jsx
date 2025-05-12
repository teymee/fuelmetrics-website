import React from "react";

//ASSETS
import hero from "@/assets/svg/career-hero.svg";
import { useTranslator } from "@/hooks/useTranslator";
export default function CareerHero() {
  const t = useTranslator();
  return (
    <section className="h-screen 3xl:h-[60vh]">
      <section className="[ flex-between lg:flex-row flex-col ] container   ">
        <section className="lg:w-1/2 space-y-5 [ lg:text-left text-center ] ">
          <h1 className="font-medium [ lg:leading-16 leading-10 ] [ lg:text-[64px] text-[32px] ] text-primary">
            {t("career.bannerText")}
            <span className=" text-fm-secondary-500 captilize ml-4">
              {t("about.growth")}
            </span>
          </h1>

          <p className="text-G-900 [ w-full lg:w-8/12 ]">
            {t("career.bannerDesc")}
          </p>

          <img src={hero} alt="" className="[  lg:hidden ]" />
          <button className="bg-primary py-3 text-center text-white text-base px-10 rounded-full mt-8">
          {t("career.viewOpening")}
          </button>
        </section>

        <section>
          <img src={hero} alt="" className="[ lg:inline hidden ]" />
        </section>
      </section>
    </section>
  );
}
