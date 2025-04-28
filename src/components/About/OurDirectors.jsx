import React from "react";

// ASSETS
import chidi from "@/assets/svg/chidi.svg";
import ola from "@/assets/svg/ola.svg";
import deji from "@/assets/svg/deji.svg";
import gab from "@/assets/svg/gab.svg";
import linkedIn from "@/assets/svg/linkedIn.svg";
import helpful from "@/assets/svg/helpful.svg"
import friendly from "@/assets/svg/friendly.svg"
import here from "@/assets/svg/here.svg"

export default function OurDirectors() {
  const directors = [
    {
      img: ola,
      name: "Folorunsho Olayide",
      position: "Managing Director",
      tag: "Enabling our future",
      desc: "My number one job is getting things done. I focus on supporting the broader team so that we can offer the best service possible.",
      link: "#",
    },
    {
      img: deji,
      name: "Deji Ogundiran",
      position: "Chief Strategy Officer",
      tag: "Our biggest innovator",
      desc: "As head of the company, my job is to ensure everyone is focused and aligned with the company goals",
      link: "#",
    },
    {
      img: gab,
      name: "Gabriel Ojomu",
      position: "Chief Project Officer",
      tag: "Visualizing our technology",
      desc: "Through my passion for enhancing the interaction between people an technology. I oversee the company's  technology strategy and infrastructure.",
      link: "#",
    },
    {
      img: chidi,
      name: "Chidi Eze",
      position: "Chief Technical Officer",
      tag: "Bringing our ideas to life",
      desc: "My job is mobilizing technical teams for projects, recommend solutions, and technical presentation and recommendations",
      link: "#",
    },
  ];
  return (
    <section className="container bg-white rounded-4xl py-10 ">
      <div className="text-center">
        <h1 className="header">Meet our directors</h1>
        <p className="subHeader  !w-[70%] ">
          The best technology needs the best people with the right spirit behind
          it. Right across the world, we have a team of dreamers and doers just
          like you, ready to help you grow. Here are the folks
          leading the charge
        </p>
      </div>

      {/* SECTION DIREECTIORS  */}

      <section className="bg-blue-100 container rounded-4xl py-16 space-y-8 !mt-20">
        <article className="flex-responsive px-8 gap-y-10">
          {directors.map((value, index) => {
            const { img, name, tag, position, desc } = value;
            return (
              <div
                key={index}
                className="center-content flex-col space-y-3 [ lg:border-r-4 lg:border-b-0 border-b-4 pb-4 ] border-white last:border-0 "
              >
                <img src={img} alt="" className="w-[6.25rem] h-[6.25rem]" />
                <p className="text-sm font-semibold">{tag}</p>
                <p className=" text-grey-200 text-center text-xs italic [ lg:w-9/12 ]">
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

      <section className="flex-responsive container justify-around my-10 gap-y-6">
          <div className="center-content flex-col">
            <img src={helpful} alt="" />
            <p className="text-base font-medium text-primary">WE’RE HELPFUL</p>
          </div>

          <div className="center-content flex-col">
            <img src={friendly} alt="" />
            <p className="text-base font-medium text-primary">WE’RE FRIENDLY</p>
          </div>

          <div className="center-content flex-col">
            <img src={here} alt="" />
            <p className="text-base font-medium text-primary">WE’RE HERE</p>
          </div>
        </section>
    </section>
  );
}
