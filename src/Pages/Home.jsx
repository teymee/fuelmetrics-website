// COMPONENTS
import Banner from "@/components/Home/Banner";
import Masterlayout from "@/components/Masterlayout";
import OurNetwork from "@/components/Home/OurNetwork";
import OurInnovation from "@/components/Home/OurInnovation";
import Achievement from "@/components/Home/Achievement";
import InsideFM from "@/components/Home/InsideFM";

export default function Home() {
  return (
    <Masterlayout>
      <section className="">
        <Banner />
        <section className="bg-blue-200">
          <OurInnovation />
          <OurNetwork />
          <Achievement />
        </section>
        <InsideFM />
      </section>
    </Masterlayout>
  );
}
