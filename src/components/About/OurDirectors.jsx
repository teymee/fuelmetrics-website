import React from "react";

// ASSETS
import chidi from "@/assets/svg/chidi.svg";
import ola from "@/assets/svg/ola.svg";
import deji from "@/assets/svg/deji.svg";
import gab from "@/assets/svg/gab.svg";
import linkedIn from "@/assets/svg/linkedIn.svg";
import helpful from "@/assets/svg/helpful.svg";
import friendly from "@/assets/svg/friendly.svg";
import here from "@/assets/svg/here.svg";
import { useTranslator } from "@/hooks/useTranslator";

export default function OurDirectors() {
  const t = useTranslator();
  const directors = [
    {
      img: ola,
      name: "Folorunsho Olayide",
      position: t("about.manageDirector"),
      tag: t("about.enableFuture"),
      desc: t("about.ceo1"),
      link: "#",
    },
    {
      img: deji,
      name: "Deji Ogundiran",
      position: t("about.cso"),
      tag: t("about.biggestInno"),
      desc: t("about.cso1"),
      link: "#",
    },
    {
      img: gab,
      name: "Gabriel Ojomu",
      position: t("about.cpo"),
      tag: t("about.visualTech"),
      desc: t("about.cpo1"),
      link: "#",
    },
    {
      img: chidi,
      name: "Chidi Eze",
      position: t("about.cto"),
      tag: t("about.bringIdeas"),
      desc: t("about.cto1"),
       link: "#",
    },
  ];
  return (
    <section className="container bg-white rounded-4xl py-10 ">
      <div className="text-center">
        <h1 className="header capitalize"> {t("about.meetFounder")}</h1>
        <p className="subHeader  !w-[60%] ">{t("about.greatTech")}</p>
      </div>

      {/* SECTION DIREECTIORS  */}

      <section className=" container rounded-4xl py-16 space-y-8 !mt-20">
        <article className="flex-responsive px-8 gap-y-10">
          {directors.map((value, index) => {
            const { img, name, tag, position, desc } = value;
            return (
              <div
                key={index}
                className="center-content flex-col space-y-3 [  lg:border-b-0 border-b-4 pb-4 ] border-white last:border-0 "
              >
                {/* w-[6.25rem] h-[6.25rem] */}
                <img src={img} alt="" className="" />
                <p className="text-sm font-semibold">{tag}</p>
                <p className=" text-white-900 text-center text-xs italic [ lg:w-9/12 ]">
                  {desc}
                </p>

                <div className="center-content font-semibold flex-col">
                  <h1 className="text-lg  text-primary">{name}</h1>
                  <p className="text-red-500 text-sm">{position}</p>
                  <img src={linkedIn} alt="" className="mt-1" />
                </div>
              </div>
            );
          })}
        </article>
      </section>

      <section className="flex-responsive uppercase container justify-around my-10 gap-y-6 bg-blue-100 py-10 rounded-3xl">
        <div className="center-content flex-col">
          <img src={helpful} alt="" />
          <p className="text-base font-medium text-primary">{t('about.helpful')}</p>
        </div>

        <div className="center-content flex-col">
          <img src={friendly} alt="" />
          <p className="text-base font-medium text-primary">{t('about.friendly')}</p>
        </div>

        <div className="center-content flex-col">
          <img src={here} alt="" />
          <p className="text-base font-medium text-primary">{t('about.here')}</p>
        </div>
      </section>
    </section>
  );
}
