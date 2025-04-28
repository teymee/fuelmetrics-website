import React, { useState } from "react";

//ASSETS
import achieve1 from "@/assets/svg/achieve1.svg";
import memory2 from "@/assets/svg/memory2.svg";
import memory3 from "@/assets/svg/memory3.svg";
import memory4 from "@/assets/svg/memory4.svg";
import arrow from "@/assets/svg/arrow-left.png";

export default function Achievement() {
  const [activeTab, setActiveTab] = useState(0);
  const achievements = [
    {
      title: "From idea to ajao estate",
      content: {
        header: "Idea to first customer",
        desc: "Discover the latest trends and pioneering advancements propelling businesses into the future, as we delve deep into the dynamic realm of innovative strategies, disruptive technologies, and forward-thinking practices shaping the forefront of global commerce.",
        img: achieve1,
        year: "2013",
        caption: "First epump prototype",
      },
    },
    {
      title: "Our first product",
      content: {
        header: "Making customers to trust the brand",
        desc: "Discover the latest trends and pioneering advancements propelling businesses into the future, as we delve deep into the dynamic realm of innovative strategies, disruptive technologies, and forward-thinking practices shaping the forefront of global commerce.",
        img: memory2,
        year: "2013",
        caption: "First epump Station Installation",
      },
    },
    {
      title: "Team expansion",
      content: {
        header: "Making the team stronger",
        desc: "Discover the latest trends and pioneering advancements propelling businesses into the future, as we delve deep into the dynamic realm of innovative strategies, disruptive technologies, and forward-thinking practices shaping the forefront of global commerce.",
        img: memory3,
        year: "2013",
        caption: "Staff and customer expansion ",
      },
    },
    {
      title: "Lagos to the world",
      content: {
        header: "Not local but with a global presence",
        desc: "Discover the latest trends and pioneering advancements propelling businesses into the future, as we delve deep into the dynamic realm of innovative strategies, disruptive technologies, and forward-thinking practices shaping the forefront of global commerce.",
        img: memory4,
        year: "2013",
        caption: "First epump Station Installation",
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
    <main className="container space-y-4 py-10 ">
      {/* SECTION METRICS */}
      <section className="bg-white flex justify-around w-full rounded-3xl py-4 px-4 [ lg:text-[64px] text-[24px] ] font-medium">
        <div className="space-y-3 text-center">
          <span className="blue-colored-text">2005+</span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            Stations on-board
          </p>
        </div>

        <div className="space-y-3 text-center">
          <span className="blue-colored-text">140</span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            Households metered
          </p>
        </div>

        <div className="space-y-3 text-center">
          <span className="blue-colored-text">
            5b <sup className="blue-colored-text lg:ml-[-20px]">+</sup>
          </span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">
            Transactions completed
          </p>
        </div>

        <div className="space-y-3 text-center">
          <span className="blue-colored-text">5</span>
          <p className="[ lg:text-lg text-[8px] ] text-gray-900">Countries</p>
        </div>
      </section>

      {/* SECTION ACHEIVEMENTS */}
      <section className="bg-white rounded-3xl py-20 px-4 ">
        <div className="space-y-3 text-center">
          <span className="blue-colored-text font-medium">
            Since the begining
          </span>
          <h1 className=" [ lg:text-[3rem] text-[20px] ]   text-gray-800 font-semibold">
            What we have achieved together?
          </h1>
          <p className="[ lg:w-[70%] w-11/12 ] mx-auto [ lg:text-base text-sm ] text-[#232323] leading-6 font-normal">
            We've spent 20+ years tackling financial technology challenges with
            early-stage start ups, emerging companies and established brands to
            launch and scale innovative payment processing and digital banking
            programs.
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
                  <p className="italic mt-1 text-grey-70">
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
                        <p className="italic mt-1 text-grey-70">{year}</p>
                        <img src={img} alt={title} className="mt-4" />
                      </section>
                    </div>

                    {/* buttons  */}
                    <div className="flex-items-center gap-x-4 absolute  z-50 [ lg:bottom-12 bottom-[-80px] ] ">
                      <button
                        className="cursor-pointer bg-white px-6 border py-4 rounded-full"
                        onClick={() => handleSwitch("prev")}
                      >
                        {" "}
                        <img src={arrow} alt="" />
                      </button>
                      <button
                        className="cursor-pointer bg-white px-6 border py-4 rounded-full"
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
