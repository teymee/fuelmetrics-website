import React from "react";

//ASSETS
import hero from "@/assets/svg/career-hero.svg";
export default function CareerHero() {
  return (
    <section className="h-screen">
      <section className="[ flex-between lg:flex-row flex-col ] container   ">
        <section className="lg:w-1/2 space-y-5 [ lg:text-left text-center ] ">
          <h1 className="font-medium [ lg:leading-16 leading-10 ] [ lg:text-[64px] text-[32px] ] ">
            Building teamwork that makes{" "}
            <span className="text-primary">growth</span>
          </h1>

          <p className="text-G-900 [ w-full lg:w-8/12 ]">
            We believe in innovation, teamwork, and creating a workplace where
            everyone can have a thriving career. If you’re passionate about
            making an impact, we’d love to have you on our team!"
          </p>

          <img src={hero} alt="" className="[  lg:hidden ]"/>
          <button className="bg-primary py-3 text-center text-white text-base px-10 rounded-full mt-8">
            View openings
          </button>
        </section>

        <section>
          <img src={hero} alt="" className="[ lg:inline hidden ]"/>
          
        </section>
      </section>
    </section>
  );
}
