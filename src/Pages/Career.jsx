

import React from "react";
import "@/components/Career/career.css";

// COMPONENTS 
import Masterlayout from "@/components/Masterlayout";
import CareerHero from "@/components/Career/CareerHero";
import Culture from "@/components/Career/Culture";
import Benefits from "@/components/Career/Benefits";
import Testimonial from "@/components/Career/Testimonial";
import OpenPositions from "@/components/Career/OpenPositions";

export default function Career() {
  return (
    <Masterlayout>
      <section className="top-margin">
        <CareerHero />
        <section className="bg-blue-200 culture">
          <Culture />
          <Benefits />
          <Testimonial/>
          <OpenPositions/>
        </section>
      </section>
    </Masterlayout>
  );
}
