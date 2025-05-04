import React from "react";

import hero from "@/assets/svg/gallery-hero.svg"
import hero2 from "@/assets/svg/gallery-bg2.svg"
export default function Banner() {
  return (
    <section className="container [ lg:h-[80vh] h-[90vh] 3xl:h-[55vh] ] flex-between  [ flex lg:flex-row flex-col ] banner-bg py-10 relative">
      <section>
        <h2 className="text-[4rem] font-medium leading-20">
          Our photo <br />
          <span className="text-fm-secondary-500 font-instrument">
            {" "}
            gallery
          </span>
        </h2>

        <p className="lg:w-[80%] text-G-900 text-base">
          Our radiant, bright and beautiful gallery showing beautiful memories
          of the company events
        </p>
      </section>

      <section>
       <img src={hero} alt="" className=" hidden lg:block absolute  -translate-y-1/2 top-1/2 right-[-8%]" />
       <img src={hero2} alt="" className="block lg:hidden mt-4"/>
      </section>
    </section>
  );
}
