import React from "react";

// ASSETS
import event1 from "@/assets/svg/event1.svg";
import event2 from "@/assets/svg/event2.svg";
import event3 from "@/assets/svg/event3.svg";

export default function Events() {
  const events = [
    {
      img: event1,
      title: "18th OTL",
      subTitle: "Africa Downstream week 2024",
      desc: "OTL Downstream Development in Africa (OTL Africa ) is the premier Pan-African downstream energy initiative. OTL Africa Downstream is dedicated to promoting and developing business, policy and operational relationships in the downstream energy value chain across Africa and here is Fuelmetrics founder giving a keynote at the event",
    },
    // {
    //   img: event2,
    //   title: "2025 IPMAN",
    //   subTitle: "Annual general meeting",
    //   desc: "from L-R, Fuelmetrics Marketing Manager Mrs. Folake Opanubi, (IPMAN) Outgoing Chairman Western Zone, Alh. Lamidi Tajudeen, Fuelmetrics Managing Director, Mr. Olayide Folorunso at the 2025 IPMAN annual general meeting",
    // },
    // {
    //   img: event3,
    //   title: "Grand Re-opening",
    //   subTitle: "Eternal Mega station, Gbagada",
    //   desc: "Fuelmetrics Managing Director, Mr. Olayide Folorunso, and Marketing Manager, Folake Opanubi, were thrilled to engage with key executives from Eterna, including: Mrs. Phoebean Ifeadi - Executive Director, Corporate Services Mr. Aliu Kamiyo - Chief Financial Officer      Mr. Eniola Jacob Olufemi - Head, Asset Management",
    // },
  ];
  return (
    <section className="bg-white rounded-4xl container py-10 lg:h-[780px] h-[680px]">
      <section className="container ">

        <div className="text-center">
          <h2 className="header">Fuelmetrics events</h2>
          <p className="subHeader">
            As we work, we never forget to celebrate our milestones
          </p>
        </div>

        <section className="relative  w-[90%] mx-auto [ lg:my-10 my-5 ]  ">
          {events?.map((event) => {
            const { title, subTitle, img, desc } = event;
            return (
              <article className="absolute" key={title}>
                <section className="[ flex lg:flex-row flex-col ] flex-between">
                  <div className="lg:w-[60%]">
                    
                    <img
                      src={img}
                      alt={title}
                      className="lg:w-[600px] lg:h-[446px] w-[300px] h-[233px] center-content"
                    />
                  </div>

                  <div className="lg:w-[40%]">
                    <h1 className="[ lg:text-[56px] text-[40px] ] font-semibold">{title}</h1>
                    <h3 className=" [ lg:text-[1.5rem]  text-base ] font-medium">{subTitle}</h3>
                    <p className="text-sm lg:w-[70%] text-grey-900 [ lg:mt-8   mt-4  ] ">{desc}</p>
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
