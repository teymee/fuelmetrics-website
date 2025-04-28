import React from "react";

// ASSETS
import growth from "@/assets/svg/growthServices.svg";
import control from "@/assets/svg/control.svg";
import monitor from "@/assets/svg/monitor.svg";
import OurServices from "./OurServices";

export default function Offers() {
  const services = [
    {
      img: monitor,
      title: "Business monitoring",
      desc: "A single platform that connects residents,  security, and property managers to improve communication, safety, and efficiency",
    },
    {
      img: control,
      title: "Control",
      desc: "Our service help you monitor and give absolute control of your business operations for improved communication, safety, and efficiency",
    },
    {
      img: growth,
      title: "Growth",
      desc: "Profit and ultimately growth is the prime object of a business which we are mandated to push your business to hit that goal with our varieties of matching business service options ",
    },
  ];
  return (
    <section className="mb-20 rounded-4xl container bg-black">
      <section className="py-20">
        <div className="text-white text-center">
          <h1 className=" [ lg:text-[3.5rem] text-2xl ] [ lg:leading-18 leading-10 ]  [ lg:w-[60%] w-[90%] ] font-medium    mx-auto">
            Ways to show how valuable our services are
          </h1>
          <p className="  [ lg:w-[40%] w-[90%] ] mx-auto [ lg:mt-8 mt-4 ] [ lg:text-base text-sm ] ">
            Innovation, growth, and staff collaboration is our main core value
            at Fuelmetrics and that is what makes us special
          </p>
        </div>

        <section className="container mx-auto my-10">
          <article className="flex-responsive justify-center items-center gap-x-10 gap-y-8">
            {services.map((value, index) => {
              const { img, title, desc } = value;
              return (
                <div
                  key={index}
                  className=" flex-col space-y-3  pb-4 text-white "
                >
                  <img src={img} alt="" className="w-[33px] h-[33px] lg:mx-0 mx-auto" />
                  <div className=" [ lg:text-left text-center ]">
                  <p className="text-lg font-semibold ">{title}</p>
                  <p className=" lg:w-10/12 text-[#F0EFF9FC]  mt-4 [ lg:text-base text-sm ]">
                    {desc}
                  </p>
                  </div>
             
                </div>
              );
            })}
          </article>
        </section>
      </section>


      <OurServices/>
    </section>
  );
}
