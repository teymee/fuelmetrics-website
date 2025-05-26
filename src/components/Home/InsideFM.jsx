import React, { useEffect, useState } from "react";

// ASSETS
import otl from "@/assets/svg/otl.svg";
import bash from "@/assets/svg/bash.svg";
import field from "@/assets/svg/field-engine.svg";
import ceo from "@/assets/svg/otl-ola.svg";
import quotation from "@/assets/svg/quotation-mark.svg";
import quotation2 from "@/assets/svg/quotation2.svg";
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
    <section className="bg-black insideFM-background">
      <section className=" ">
        <section
          className={`border-x-2  border-white/30 mx-auto py-20 [ lg:w-[40%] w-[90%] ]`}
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

      <div className="w-[20%] h-[3px] bg-purple-400 mx-auto my-28"></div>

      <section className="w-full  lg:pl-[10%] mx-auto relative pb-40 2xl:w-[70%] 3xl:w-[60%] overflow-x-hidden">
        <div className=" [ lg:text-[128px] text-[48px] ] flex gap-x-8  font-medium mx-auto ">
          <h2 className="outline-text">CEO's</h2>
          <h2 className="text-white"> {t("home.speech")}</h2>
        </div>

        <section className="relative lg:w-[40%] ">
          {/* quotation  */}
          <img
            src={quotation2}
            alt=""
            className="absolute left-[-50px] top-[-60px] z-0 "
          />

          {/* ceo's speech */}
          <div className="relative !z-40 ">
            <h2 className="lightblue-colored-text text-xl font-semibold mb-10">
              {t("home.tagline")}
            </h2>
            <p className="text-white  [ text-[1.25rem] max-xs:text-[14px] ]  [ max-xs:w-[80%] ] relative !z-50 ">
              {t("home.ceoSpeech")}
            </p>
          </div>

          {/* quotatation  */}
          <img
            src={quotation}
            alt=""
            className="absolute [ right-[-50px] max-xs:right-0 ] bottom-[30px] z-0 max-xs:w-[44px]  "
          />
          {/* ceo name  */}
          <div className="mt-20 font-mediums">
            <p className="italic text-base text-green-100  text-xl font-semibold font-instrument">
              Olayide folorunsho
            </p>
            <p className="  mt-1 text-white">CEO Fuelmetrics ltd</p>
          </div>
        </section>

        {/* CEO image */}
        <div className="absolute right-0  max-xs:right-[-90px] top-[20%] !z-0">
          <img src={ceo} alt="" />
        </div>
      </section>
    </section>
  );
}
