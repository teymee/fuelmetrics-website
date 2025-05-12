import React from "react";
import FAQItem from "./FAQItem";
import { useTranslator } from "@/hooks/useTranslator";

export default function FAQ() {
  const t = useTranslator();

  const faqs = [
    {
      title: t("contact.whatIsFuelmetrics"),
      body: t("contact.ans1"),
    },
    {
      title: "How can i install  epump in my stations?",
      body: "Fuelmetrics Limited is a technology company that provides innovative and affordable technology solutions to help businesses thrive",
    },
    {
      title: "Where is Fuelmetrics?",
      body: "Fuelmetrics Limited is a technology company that provides innovative and affordable technology solutions to help businesses thrive",
    },
    {
      title: "How can i install  epump in my station?",
      body: "Fuelmetrics Limited is a technology company that provides innovative and affordable technology solutions to help businesses thrive",
    },
  ];
  return (
    <section className="bg-[#C8CCD330]">
      <section className="container [ lg:py-20 pt-[310px] pb-20 ]  ">
        <div>
          <h2 className="text-[56px] font-medium">FAQs</h2>
        </div>

        <section className="space-y-4 [ lg:mt-10 mt-5 ] ">
          {faqs.map((faq, index) => (
            <FAQItem faq={faq} key={index} />
          ))}
        </section>
      </section>
    </section>
  );
}
