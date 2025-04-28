import React from "react";

// ASSETS
import visionImg from "@/assets/svg/vision-img.svg";
import building from "@/assets/svg/building.svg";
import excellence from "@/assets/svg/excellence.svg";
import innovative from "@/assets/svg/innovative.svg";
import coin from "@/assets/svg/coin.svg";
export default function Visions() {
  const values = [
    {
      img: building,
      title: "Integrity",
      desc: " We are committed to maintaining the trust and  confidence of our clients, investors and employees",
    },

    {
      img: building,
      title: "Customercentric",
      desc: "Our clients come first. We act in their best interst and make their concerns a priority",
    },

    {
      img: innovative,
      title: "Innovative",
      desc: " We are committed to maintaining the trust and  confidence of our clients, investors and employees",
    },

    {
      img: excellence,
      title: "Excellence",
      desc: "We strive to exceed expectations by providing the best service possible.",
    },
  ];

  return (
    <main className="py-40 relative">
      <img src={coin} alt="" className="absolute top-[-50px] right-0 [ lg:flex hidden ]" />
      <section className="container relative space-y-10">
        <div className="text-center">
          <h1 className="header">Our Vision and Mission</h1>
          <p className="subHeader ">What we stand for at Fuelmetrics</p>
        </div>

        <section>
          <section className=" [ lg:pt-20 pt-10 mb-20 ] relative [ lg:w-[85%] container ] mx-auto ">
            <img
              src={visionImg}
              alt=""
              className=" rounded-4xl w-full  [ lg:h-[540px] h-[30.625rem]  ] object-cover "
            />

            <section className="absolute bottom-0 w-full flex-responsive  gap-x-[2px] gap-y-[1px] ">
              {/* SECTION VISION  */}
              <div className="bg-[#4B4C9EB8] lg:rounded-bl-4xl text-white py-4 text-center lg:w-1/2">
                <h1 className=" [ lg:text-2xl text-base ] font-medium text-fm-secondary-500">
                  Our Vision
                </h1>
                <div className="w-[72px] h-[6px] bg-primary mx-auto mt-1"></div>

                <p className=" [ lg:w-1/2 container ] font-base-responsive mx-auto mt-4">
                  Driving growth and efficiency for businesses in Africa
                </p>
              </div>
              {/* SECTION MISSION  */}
              <div className="bg-[#4B4C9EB8] [ lg:rounded-br-4xl lg:rounded-b-[0px] rounded-b-2xl ] text-white py-4 text-center lg:w-1/2">
                <h1 className=" [ lg:text-2xl text-base ] font-medium text-fm-secondary-500">
                  Our Mission
                </h1>
                <div className="w-[72px] h-[6px] bg-primary mx-auto mt-1"></div>

                <p className=" [ lg:w-1/2 container ] font-base-responsive mx-auto mt-4">
                  We provide innovative and affordable technology solutions to
                  help businesses thrive
                </p>
              </div>
            </section>
          </section>
        </section>

        {/* SECTION CORE VALUES  */}

        <section className="bg-yellow-50 container rounded-4xl py-16 pb-20 space-y-8">
          <div className="blue-colored-text">
            <h1 className="text-[20px] font-medium text-center">
              Our core values
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
