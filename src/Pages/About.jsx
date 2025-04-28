import AboutHero from "@/components/About/AboutHero";
import Offers from "@/components/About/Offers";
import OurDirectors from "@/components/About/OurDirectors";
import OurServices from "@/components/About/OurServices";
import Visions from "@/components/About/Visions";
import Masterlayout from "@/components/Masterlayout";

export default function About() {
  return (
    <Masterlayout>
      <section className="top-margin">
        <AboutHero />

        <section className="bg-blue-200 pb-20 ">
          <Visions />
          {/* <OurServices /> */}
          <Offers />
          <OurDirectors />
        </section>
      </section>
    </Masterlayout>
  );
}
