import React, { useEffect, useState } from "react";

// ASSETS
import event1 from "@/assets/svg/event1.svg";
import event2 from "@/assets/svg/event2.svg";
import event3 from "@/assets/svg/event3.svg";
import { useTranslator } from "@/hooks/useTranslator";

export default function Events() {
  const t = useTranslator();
  const [activeTab, setActiveTab] = useState(0);
  const events = [
    {
      img: event1,
      title: t("gallery.18thOTL"),
      subTitle: t("gallery.africaDownStream"),
      desc: t("gallery.desc1"),
    },
    {
      img: event2,
      title: t("gallery.ipman"),
      subTitle: t("gallery.annualMeeting"),
      desc: t("gallery.desc2"),
    },
    {
      img: event3,
      title: t("gallery.grandOpening"),
      subTitle: t("gallery.eternalStation"),
      desc: t("gallery.desc3"),
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
          <h2 className="header">{t("gallery.events")}</h2>
          <p className="subHeader">{t("gallery.eventDesc")}</p>
        </div>

        <section className="relative   3xl:w-[75%] mx-auto [ lg:my-10 mt-[-20px] ] h-[680px] lg:h-[600px] ">
          {events?.map((event, index) => {
            const { title, subTitle, img, desc } = event;
            return (
              <article
                className={`transition-all duration-500 space-y-6 absolute lg:right-10 bottom-30 ${
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
                    <div className="[ lg:w-[600px] lg:h-[446px]  ] bg-blue-200 absolute -translate-1/2 top-[53%] left-[45%] 3xl:left-[46%] z-10"></div>
                  </div>

                  <div className="lg:w-[40%] [ lg:text-left text-center ]">
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
