import React, { useEffect, useState } from "react";

//ASSETS
import offer1 from "@/assets/svg/offer1.svg";
import offer2 from "@/assets/svg/offer2.svg";
import offer3 from "@/assets/svg/offer3.svg";

export default function OurServices() {
  const [activeTab, setActiveTab] = useState(0);
  const services = [
    {
      title: "Software Hardware and SaaS",
      desc: "Our company offers software service for your business, hardware devices to bei nstalled be it for home personal or company use for efficient event monitoring, and Software as a service with business customization option",
      img: offer1,
    },

    {
      title: "Available service engineers",
      desc: "After installation, we have our engineers on ground to help you to maintain and service your home, business or station automation system for optimal efficiency",
      img: offer2,
    },

    {
      title: "Standby customer support",
      desc: "Suspendisse ac luctus odio. In ligula ex, tempor nec laoreet at, commodo in tortor. Nullam velit arcu, vulputate vitae mauris vel, venenatis dignissim nibh. Nulla sodales venenatis pretium.",
      img: offer3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services?.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [services.length]);

  return (
    <section >
      <h1 className=" [ lg:text-[3.5rem] text-2xl ] [ lg:leading-18 leading-10 ]  font-medium pb-28  text-white text-center ">
        What we offer for your <br /> growth
      </h1>
      {/* LARGE SCREEN  */}
      <section className="container hidden lg:block pb-20 relative lg:h-[650px]">
        {/* SECTION NOTE  */}
        <section className="space-y-12 w-[75%]">
          {services.map((service, index) => {
            const { title, desc } = service;
            return (
              <div
                key={index}
                className={`transition-all duration-500 space-y-6 ${
                  activeTab === index ? "text-white" : "text-purple-300"
                }`}
              >
                <h1 className="font-semibold text-2xl">{title}</h1>
                <p className="text-base w-7/12">{desc}</p>
              </div>
            );
          })}
        </section>

        {/* SECTION IMAGE  */}
        <section>
          {services.map((service, index) => {
            const { img } = service;
            return (
              <div
                key={index}
                className={`transition-all duration-500 space-y-6 absolute right-10 bottom-30 ${
                  activeTab === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={img} alt="" />
              </div>
            );
          })}
        </section>
      </section>
      {/*  */}

      {/* MOBILE SCREEN  */}

      <section className="block lg:hidden relative h-[600px] container">
        {services.map((service, index) => {
          const { title, desc, img } = service;
          return (
            <div
              className={`flex flex-col text-center text-white transition-all duration-500  justify-center items-center absolute  bottom-30 ${
                activeTab === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={img} alt="" className="w-10/12" />
              <div className="mt-4">
                <h1 className="font-semibold text-xl">{title}</h1>
                <p className="text-md py-4">{desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/*  */}
    </section>
  );
}
