import React, { useState } from "react";

//ASSETS
import achieve1 from "@/assets/svg/achieve1.svg";
import memory2 from "@/assets/svg/memory2.svg";
import memory3 from "@/assets/svg/memory3.svg";
import memory4 from "@/assets/svg/memory4.svg";
import arrow from "@/assets/svg/arrow-left.png";
import { useTranslator } from "@/hooks/useTranslator";

export default function Achievement() {
  const t = useTranslator();
  const [activeTab, setActiveTab] = useState(0);
  const achievements = [
    {
      title: t("home.firstPro"),
      content: {
        header: t("home.ideaToAjao"),
        desc: t("home.story1"),
        img: achieve1,
        year: "2015",
        caption: t("home.firstPro"),
      },
    },
    {
      title: t("home.firstProjectLaunch"),
      content: {
        header: t("home.visionReality"),
        desc: t("home.story2"),
        img: memory2,
        year: "2016",
        caption: t("home.firstInstall"),
      },
    },
    {
      title: t("home.teamExpansion"),
      content: {
        header: t("home.buildingTeam"),
        desc: t("home.story3"),
        img: memory3,
        year: "2015",
        caption: t("home.staffExpansion"),
      },
    },
    {
      title: t("home.lagosWorld"),
      content: {
        header: t("home.fromLocal"),
        desc: t("home.story4"),
        img: memory4,
        year: "2015",
        caption: t("home.intercontinental"),
      },
    },
  ];

  const handleSwitch = (type) => {
    const arrLength = achievements.length;
    setActiveTab((prevState) => {
      if (type === "next") {
        return prevState + 1 >= arrLength ? 0 : prevState + 1;
      }

      if (type === "prev") {
        return prevState - 1 < 0 ? arrLength - 1 : prevState - 1;
      }

      // if (type === "next" && prevState < achievements?.length) {
      //   return prevState + 1;
      // } else {
      //   return 0;
      // }
    });
  };
  return (
    <main className="container py-10 space-y-4 ">
      {/* SECTION METRICS */}
      <section className="bg-white flex justify-around w-full rounded-3xl py-4 px-4 [ lg:text-[64px] text-[24px] ] font-medium">
        <div className="space-y-3 text-center">
          <span className="blue-colored-text">2,005+</span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            {t("home.stationOnboard")}
          </p>
        </div>

        <div className="space-y-3 text-center">
          <span className="blue-colored-text">140</span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            {t("home.houseMetered")}
          </p>
        </div>

        <div className="space-y-3 text-center">
          <span className="blue-colored-text">
            5b <sup className="blue-colored-text lg:ml-[-20px]">+</sup>
          </span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            {t("home.tranCompleted")}
          </p>
        </div>

        <div className="space-y-3 text-center">
          <span className="blue-colored-text">5</span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            {t("home.countries")}
          </p>
        </div>
      </section>

      {/* SECTION ACHEIVEMENTS */}
      <section className="px-4 py-20 bg-white rounded-3xl ">
        <div className="space-y-3 text-center">
          <span className="font-medium blue-colored-text">
            {t("home.sinceBegin")}
          </span>
          <h1 className=" [ lg:text-[3rem] text-[20px] ] font-inter  text-gray-800 font-semibold">
            {t("home.achievedTogether")}
          </h1>
          <p className="[ lg:w-[70%] w-11/12 ] mx-auto [ lg:text-base text-sm ] text-[#23232390] leading-6 font-normal font-inter">
            {t("home.achieveDesc")}
          </p>
        </div>

        <section className="bg-blue-100 mt-8 rounded-b-3xl py-10 relative [ lg:h-[500px]  h-[600px] ]">
          <section className="flex-responsive justify-between items-start gap-x-10 [ lg:px-10  px-4 ] ">
            {/* SECTION TITLE  */}
            <section className=" [ lg:w-[15%] w-full ] lg:pt-14   flex justify-between gap-x-4 ">
              <section className="[ lg:w-full w-[30%] ] [ lg:space-y-10 space-y-4 ] ">
                {achievements?.map((item, index) => {
                  const { title } = item ?? {};

                  return (
                    <article key={title} className="">
                      <section
                        className={` [ lg:text-base text-[10px] ] flex-items-center gap-x-3  font-medium  transition-all ease-in-out duration-1000  
 ${index !== activeTab ? " text-white-700 opacity-20 " : " "} `}
                      >
                        <div
                          className={`lg:w-4 lg:h-4 w-2 h-2 rounded-full transition-all ease-in-out duration-1000 
                          ${
                            index !== activeTab
                              ? " bg-white  border-white-300 border-2"
                              : "bg-purple-200 border-0"
                          }
                           `}
                        ></div>

                        <p className="">{title}</p>
                      </section>

                      {/* SECTION RULER  */}
                      {/* <section>
                      <div
                        className={`h-8 w-[1px] transition-all ease-in-out duration-1000  ml-[8px] mt-[-2px]
                        ${index !== activeTab ? " bg-white-200" : " "} 
                        `}
                      ></div>
                      <div
                        className={`h-8 w-[1px] ml-[8px] mt-[-2px] transition-all ease-in-out duration-1000 
                        ${
                          index !== activeTab
                            ? " bg-white-200"
                            : "bg-purple-200 "
                        } 
                        `}
                      ></div>
                    </section> */}
                      {/*  */}
                    </article>
                  );
                })}
              </section>

              <div className=" w-[80%] z-20 [ lg:hidden block ]">
                <section className="bg-grey-400 px-2 py-4 mt-[-20px] flex-col items-end  justify-self-end">
                  <h3 className="text-sm font-medium">
                    {achievements[activeTab]?.content?.caption}
                  </h3>
                  <p className="mt-1 italic text-grey-70">
                    {achievements[activeTab]?.content?.year}
                  </p>
                  <img
                    src={achievements[activeTab]?.content?.img}
                    alt={achievements[activeTab]?.content?.title}
                    className="mt-4 [ lg:w-full lg:h-full w-[10.625rem] ]"
                  />
                </section>
              </div>
            </section>

            {/* SECTION BODY  */}
            <section className="[ lg:w-[80%] w-full ] relative">
              {achievements?.map((item, index) => {
                const { title, content } = item ?? {};
                const { header, desc, img, caption, year } = content ?? {};

                return (
                  <article
                    key={index}
                    className={`flex justify-between items-start gap-x-10 absolute z-10
                      ${activeTab - 1 === index ? "text-opacity" : ""}
                      ${activeTab === index ? "text-entry " : "opacity-0"}`}
                  >
                    <section className="lg:w-[50%] [ lg:pt-10 pt-5 ] relative">
                      <h1 className=" [ lg:text-[2rem] text-base ] font-medium">
                        {header}
                      </h1>
                      <p className=" [ lg:mt-10 mt-5 ] text-white-900 font-medium [ lg:text-base text-sm   ] ">
                        {desc}
                      </p>
                    </section>

                    <div className=" w-[50%] z-20 [ lg:block hidden  ]">
                      <section className="bg-grey-400 px-6 py-4 mt-[-20px] flex-col items-end  justify-self-end">
                        <h3 className="text-base font-medium">{caption}</h3>
                        <p className="mt-1 italic text-grey-70">{year}</p>
                        <img src={img} alt={title} className="mt-4" />
                      </section>
                    </div>

                    {/* buttons  */}
                    <div className="flex-items-center gap-x-4 absolute  z-50 [ lg:bottom-12 bottom-[-80px] ] ">
                      <button
                        className="px-6 py-4 bg-white border rounded-full cursor-pointer"
                        onClick={() => handleSwitch("prev")}
                      >
                        {" "}
                        <img src={arrow} alt="" />
                      </button>
                      <button
                        className="px-6 py-4 bg-white border rounded-full cursor-pointer"
                        onClick={() => handleSwitch("next")}
                      >
                        {" "}
                        <img src={arrow} alt="" className="rotate-180" />
                      </button>
                    </div>
                    {/*  */}
                  </article>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
