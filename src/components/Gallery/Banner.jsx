import React from "react";

import hero from "@/assets/svg/gallery-hero.svg"
import hero2 from "@/assets/svg/gallery-bg2.svg"
export default function Banner() {
  return (
    <section className="container [ lg:h-[80vh] h-[60vh] ] flex-between  [ flex lg:flex-row flex-col ] banner-bg py-10">
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
       <img src={hero} alt="" className=" hidden lg:block" />
       <img src={hero2} alt="" className="block lg:hidden"/>
      </section>
    </section>
  );
}
