import React, { useEffect, useState } from "react";

// ASSETS
import event1 from "@/assets/svg/event1.svg";
import event2 from "@/assets/svg/event2.svg";
import event3 from "@/assets/svg/event3.svg";

export default function Events() {
  const [activeTab, setActiveTab] = useState(0);
  const events = [
    {
      img: event1,
      title: "18th OTL",
      subTitle: "Africa Downstream week 2024",
      desc: "OTL Downstream Development in Africa (OTL Africa ) is the premier Pan-African downstream energy initiative. OTL Africa Downstream is dedicated to promoting and developing business, policy and operational relationships in the downstream energy value chain across Africa and here is Fuelmetrics founder giving a keynote at the event",
    },
    {
      img: event2,
      title: "2025 IPMAN",
      subTitle: "Annual general meeting",
      desc: "from L-R, Fuelmetrics Marketing Manager Mrs. Folake Opanubi, (IPMAN) Outgoing Chairman Western Zone, Alh. Lamidi Tajudeen, Fuelmetrics Managing Director, Mr. Olayide Folorunso at the 2025 IPMAN annual general meeting",
    },
    {
      img: event3,
      title: "Grand Re-opening",
      subTitle: "Eternal Mega station, Gbagada",
      desc: "Fuelmetrics Managing Director, Mr. Olayide Folorunso, and Marketing Manager, Folake Opanubi, were thrilled to engage with key executives from Eterna, including: Mrs. Phoebean Ifeadi - Executive Director, Corporate Services Mr. Aliu Kamiyo - Chief Financial Officer      Mr. Eniola Jacob Olufemi - Head, Asset Management",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [events.length]);

  return (
    <section className="bg-white rounded-4xl container py-10 lg:h-[780px] h-[780px]">
      <section className="container ">
        <div className="text-center">
          <h2 className="header">Fuelmetrics events</h2>
          <p className="subHeader">
            As we work, we never forget to celebrate our milestones
          </p>
        </div>

        <section className="relative  lg:w-[90%] 3xl:w-[75%] mx-auto [ lg:my-10 my-5 ] h-[680px] lg:h-[600px] ">
          {events?.map((event, index) => {
            const { title, subTitle, img, desc } = event;
            return (
              <article
                className={`transition-all duration-500 space-y-6 absolute right-10 bottom-30 ${
                  activeTab === index ? "opacity-100" : "opacity-0"
                }`}
                key={title}
              >
                <section className="[ flex lg:flex-row flex-col ] flex-between">
                  <div className="lg:w-[60%] relative">
                    <img
                      src={img}
                      alt={title}
                      className="lg:w-[600px] lg:h-[446px] w-[300px] h-[233px] center-content relative z-20"
                    />
                    <div className="[ lg:w-[600px] lg:h-[446px]  ] bg-blue-200 absolute -translate-1/2 top-[53%] left-[48%] 3xl:left-[46%] z-10"></div>
                  </div>

                  <div className="lg:w-[40%]">
                    <h1 className="[ lg:text-[56px] text-[32px] ] mb-4 font-semibold [ lg:leading-15 leading-10 ]">
                      {title}
                    </h1>
                    <h3 className=" [ lg:text-[1.5rem]  text-base ] font-medium">
                      {subTitle}
                    </h3>
                    <p className="text-sm lg:w-[70%] text-grey-900 [ lg:mt-8   mt-4  ] ">
                      {desc}
                    </p>
                  </div>
                </section>
              </article>
            );
          })}
        </section>
      </section>
    </section>
  );
}
