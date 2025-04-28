import React from "react";

import hero from "@/assets/svg/gallery-hero.svg"

export default function Banner() {
  return (
    <section className="container h-[80vh] flex-between  [ flex lg:flex-row flex-col ] banner-bg">
      <section>
        <h2 className="text-[4rem] font-medium leading-20">
          Our photo <br />
          <span className="text-fm-secondary-500 font-instrument">
            {" "}
            gallery
          </span>
        </h2>

        <p className="w-[80%] text-G-900 text-base">
          Our radiant, bright and beautiful gallery showing beautiful memories
          of the company events
        </p>
      </section>

      <section>
       <img src={hero} alt="" />
      </section>
    </section>
  );
}
