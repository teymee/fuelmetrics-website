import React, { useEffect, useState } from "react";

// ASSETS
import otl from "@/assets/svg/otl.svg";
import bash from "@/assets/svg/bash.svg";
import field from "@/assets/svg/field-engine.svg";
import ceo from "@/assets/svg/otl-ola.svg";
import { useTranslator } from "@/hooks/useTranslator";
// import event1 from "@/assets/svg/event1.svg";

export default function InsideFM() {
  const t = useTranslator();
  const articles = [
    { title: "OTL Africa 2022", img: otl },
    { title: "Office vibe", img: bash },
    { title: "Field engineers", img: field },
    // {
    //   title: "Event",
    //   img: event1,
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, [articles.length]);

  const getPositionStyle = (index) => {
    const total = articles.length;
    const relativeIndex = (index - currentIndex + total) % total;

    if (relativeIndex === 0) {
      return "center";
    } else if (relativeIndex === 1) {
      return "right";
    } else if (relativeIndex === total - 1) {
      return "left";
    } else {
      return "hidden"; // keep others hidden
    }
  };

  return (
    <section className="bg-black">
      <section className="   insideFM-background pb-40">
        <section
          className={`border-x-2 border-white/30 mx-auto py-20 [ lg:w-[40%] w-[90%] ]`}
        >
          <p className="green-colored-text text-center text-[20px] font-medium font-inter">
            {t("home.insideFuel")}
          </p>

          <h2 className="text-white text-center [ lg:text-[3rem] text-base ] font-medium mt-4">
            {t("home.officeVibe")}
          </h2>
        </section>
        <div className="carousel-container">
          <div className="carousel">
            <article className=" bg-[#171717] absolute h-[900px] z-30  w-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "></article>
            {articles.map((article, index) => (
              <img
                key={index}
                src={article.img}
                alt={article.title}
                className={`image ${getPositionStyle(index)} `}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20  mx-auto ">
        <div className=" [ lg:text-[128px] text-[48px] ] flex-between lg:w-[65%] w-[90%]  font-medium mx-auto ">
          <h2 className="outline-text">CEO</h2>
          <h2 className="text-white"> {t("home.speech")}</h2>
        </div>

        <div className="lg:w-[45%] mx-auto text-white/70 my-10 [ lg:text-[32px] text-base ] w-[90%] ">
          <p>{t("home.ceoSpeech")}</p> 

          <div className="mt-8 flex-items-center gap-x-4">
            <img src={ceo} alt="" />
            <div>
              <p className="italic text-base">Olayide folorunsho</p>
              <p className="text-sm mt-1">CEO Fuelmetrics ltd</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
