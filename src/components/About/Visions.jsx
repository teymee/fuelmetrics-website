import React from "react";

// ASSETS
import visionImg from "@/assets/svg/vision-img.svg";
import building from "@/assets/svg/building.svg";
import excellence from "@/assets/svg/excellence.svg";
import innovative from "@/assets/svg/innovative.svg";
import coin from "@/assets/svg/coin.svg";
import { useTranslator } from "@/hooks/useTranslator";
export default function Visions() {
  const t = useTranslator();
  const values = [
    {
      img: building,
      title: t("about.integrity"),
      desc: t("about.integrity1"),
    },

    {
      img: building,
      title: t("about.centric"),
      desc: t("about.centric1"),
    },

    {
      img: innovative,
      title: t("about.innovation"),
      desc: t("about.inno1"),
    },

    {
      img: excellence,
      title: t("about.excellence"),
      desc: t("about.excel1"),
     },
  ];

  return (
    <main className="py-10 relative">
      <img
        src={coin}
        alt=""
        className="absolute top-[-120px] right-0 [ lg:flex hidden ]"
      />
      <section className="container relative space-y-10">
        <div className="text-center">
          <h1 className="header">{t("about.visionMission")}</h1>
          <p className="subHeader ">{t("about.stance")}</p>
        </div>

        <section>
          <section className=" [ lg:pt-10 pt-10 mb-20 ] relative [ lg:w-[85%] container ] mx-auto ">
            <img
              src={visionImg}
              alt=""
              className=" rounded-4xl w-full  [ lg:h-[540px] h-[30.625rem]  ] object-cover "
            />

            <section className="absolute bottom-0 w-full flex-responsive  gap-x-[2px] gap-y-[1px] ">
              {/* SECTION VISION  */}
              <div className="bg-[#4B4C9EB8] lg:rounded-bl-4xl text-white py-4 text-center lg:w-1/2">
                <h1 className=" [ lg:text-2xl text-base ] font-medium text-fm-secondary-500">
                  {t("about.vision")}
                </h1>
                <div className="w-[72px] h-[6px] bg-primary mx-auto mt-1"></div>

                <p className=" [ lg:w-1/2 container ] font-base-responsive mx-auto mt-4">
                  {t("about.drivingGrowth")}
                </p>
              </div>
              {/* SECTION MISSION  */}
              <div className="bg-[#4B4C9EB8] [ lg:rounded-br-4xl lg:rounded-b-[0px] rounded-b-2xl ] text-white py-4 text-center lg:w-1/2">
                <h1 className=" [ lg:text-2xl text-base ] font-medium text-fm-secondary-500">
                  {t("about.mission")}
                </h1>
                <div className="w-[72px] h-[6px] bg-primary mx-auto mt-1"></div>

                <p className=" [ lg:w-1/2 container ] font-base-responsive mx-auto mt-4">
                  {t("about.provideMission")}
                </p>
              </div>
            </section>
          </section>
        </section>

        {/* SECTION CORE VALUES  */}

        <section className="bg-yellow-50 container rounded-4xl py-16 pb-20 space-y-8">
          <div className="blue-colored-text">
            <h1 className="text-[20px] font-medium text-center">
              {t("about.ourCore")}
            </h1>
          </div>

          <article className="flex-responsive px-16 gap-y-10">
            {values.map((value, index) => {
              const { img, title, desc } = value;
              return (
                <div key={index} className="center-content flex-col space-y-3">
                  <img src={img} alt="" />
                  <h1 className="text-lg font-medium">{title}</h1>
                  <p className=" text-grey-200 text-center text-sm italic [ lg:w-9/12 ]">
                    {desc}
                  </p>
                </div>
              );
            })}
          </article>
        </section>
      </section>
    </main>
  );
}
