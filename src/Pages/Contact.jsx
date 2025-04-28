//ASSETS
import "@/components/Contact/contact.css";
//COMPONENTS
import FAQ from "@/components/Contact/FAQ";
import Hero from "@/components/Contact/Hero";
import Masterlayout from "@/components/Masterlayout";

export default function Contact() {
  return (
    <Masterlayout>
      <Hero />
      <FAQ />
    </Masterlayout>
  );
}
