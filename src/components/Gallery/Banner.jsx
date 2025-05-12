import React from "react";

import hero from "@/assets/svg/gallery-hero.svg";
import hero2 from "@/assets/svg/gallery-bg2.svg";
import { useTranslator } from "@/hooks/useTranslator";
export default function Banner() {
  const t = useTranslator();
  return (
    <section className="container [ lg:h-[80vh] h-[65vh] 3xl:h-[55vh] ] flex-between  [ flex lg:flex-row flex-col ] banner-bg py-10 relative">
      <section className="lg:w-1/2">
        <h2 className="text-[4rem] font-medium leading-20 text-primary">
          {t("gallery.our")}
          <span className="text-fm-secondary-500 ml-4 ">
            {t("gallery.gallery")}
          </span>
        </h2>

        <p className="lg:w-[55%] text-G-900 lg:mt-4 text-base">{t("gallery.desc")}</p>
      </section>

      <section className="">
        <img
          src={hero}
          alt=""
          className=" hidden lg:w-[70%] lg:block absolute  -translate-y-1/2 top-1/2 right-[-8%]"
        />
        <img src={hero2} alt="" className="block lg:hidden mt-4" />
      </section>
    </section>
  );
}
