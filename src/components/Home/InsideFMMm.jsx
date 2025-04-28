import React, { useEffect, useState } from "react";

// ASSETS
import otl from "@/assets/svg/otl.svg";
import bash from "@/assets/svg/bash.svg";
import field from "@/assets/svg/field-engine.svg";
import event1 from "@/assets/svg/event1.svg";

export default function InsideFM() {
  const [activeTab, setActiveTab] = useState(0);

  const [articles] = useState([
    {
      title: "OTL Africa 2022",
      img: otl,
    },
    {
      title: "Office vibe",
      img: bash,
    },
    {
      title: "Field engineers",
      img: field,
    },
    {
      title: "Event",
      img: event1,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        return prevTab + 1 >= articles.length ? 0 : activeTab + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeTab, articles]);

  const leftTab = activeTab - 1 < 0 ? articles.length - 1 : activeTab - 1;
  const rightTab = activeTab + 1 >= articles.length ? 0 : activeTab + 1;
  return (
    <main className="bg-black  insideFM-background">
      <section className="pb-40 container">
        <section className={`border-x-2 border-white/30 w-[40%] mx-auto py-20`}>
          <p className="green-colored-text text-center text-[20px] font-medium font-inter">
            Inside fuelmetrics
          </p>

          <h2 className="text-white text-center text-[3rem] font-medium mt-4">
            Office vibe
          </h2>
        </section>

        <section
          className={`flex justify-between items-center transition-all duration-1000`}
        >
          {/* SECTION LEFT  */}
          <article className="w-[20%] opacity-30  ">
            <div className="center-content transition-all duration-1000">
              <img src={articles[leftTab].img} alt=""
               />
            </div>
          </article>

          {/* SECTION CENTER  */}

          <article className="w-[60%] shadow-2xl bg-[#171717]   ">
            <div className="center-content transition-all duration-1000">
              <img
                src={articles[activeTab].img}
                alt=""
                className=""
              />
            </div>
          </article>

          {/* SECTION RIGHT  */}

          <article className="w-[20%] opacity-30">
            <div className="center-content transition-all duration-1000 ">
              <img src={articles[rightTab].img} alt="" />
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
