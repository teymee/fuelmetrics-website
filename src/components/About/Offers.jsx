import React from "react";

// ASSETS
import growth from "@/assets/svg/growthServices.svg";
import control from "@/assets/svg/control.svg";
import monitor from "@/assets/svg/monitor.svg";
import OurServices from "./OurServices";
import { useTranslator } from "@/hooks/useTranslator";

export default function Offers() {
  const t = useTranslator();
  const services = [
    {
      img: monitor,
      title: t("about.mon"),
      subTitle: t("about.mon1"),
      desc: t("about.monDesc"),
    },
    {
      img: control,
      title: t("about.control"),
      subTitle: t("about.con1"),
      desc: t("about.conDesc"),
     },
    {
      img: growth,
      title: t("about.growth"),
      subTitle: t("about.growth1"),
      desc: t("about.growthDesc"),
     },
  ];
  return (
    <section className="mb-20 rounded-4xl container bg-black">
      <section className="py-20">
        <div className="text-white text-center">
          <h1 className=" [ lg:text-[3.5rem] text-2xl ] [ lg:leading-18 leading-10 ]  [ lg:w-[60%] w-[90%] ] font-medium    mx-auto">
           {t('about.ourValue')}
          </h1>
          <p className="  [ lg:w-[40%] w-[90%] ] mx-auto [ lg:mt-8 mt-4 ] [ lg:text-base text-sm ] ">
          {t('about.ourValueSubtext')}
          </p>
        </div>

        <section className="container mx-auto mt-10">
          <article className="flex-responsive justify-center items-center gap-x-10 gap-y-8  ">
            {services.map((value, index) => {
              const { img, title, desc, subTitle } = value;
              return (
                <div
                  key={index}
                  className=" flex-col space-y-3  pb-4 text-white "
                >
                  <img
                    src={img}
                    alt=""
                    className="w-[33px] h-[33px] lg:mx-0 mx-auto"
                  />
                  <div className=" [ lg:text-left text-center ]">
                    <p className="text-2xl font-semibold text-blue-700">{title}</p>
                    <p className="text-lg font-semibold mt-4">{subTitle}</p>
                    <p className=" lg:w-10/12 text-[#F0EFF9FC]  mt-4 [ lg:text-base text-sm ]">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </article>
        </section>
      </section>

      <OurServices />
    </section>
  );
}
