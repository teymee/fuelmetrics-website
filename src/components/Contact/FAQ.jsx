import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { useTranslator } from "@/hooks/useTranslator";

//ASSETS
import plus from "@/assets/svg/plus.svg";
import times from "@/assets/svg/times.svg";

export default function FAQ() {
  const t = useTranslator();
  const [isOpen, setIsOpen] = useState(false);
  const epumpFaqs = [
    {
      title: t("contact.faq14"),
      body: t("contact.ans14"),
    },
    {
      title: t("contact.faq15"),
      body: t("contact.ans15"),
    },
    {
      title: t("contact.faq16"),
      body: t("contact.ans16"),
    },
    {
      title: t("contact.faq17"),
      body: t("contact.ans17"),
    },
  ];

  const remisFaqs = [
    {
      title: t("contact.faq10"),
      body: t("contact.ans10"),
    },
    {
      title: t("contact.faq11"),
      body: t("contact.ans11"),
    },
    {
      title: t("contact.faq12"),
      body: t("contact.ans12"),
    },
    {
      title: t("contact.faq13"),
      body: t("contact.ans13"),
    },
  ];
  const faqs = [
    {
      title: t("contact.faq2"),
      body: t("contact.ans2"),
    },
    {
      title: t("contact.faq3"),
      body: t("contact.ans3"),
    },
    {
      title: t("contact.faq4"),
      body: t("contact.ans4"),
    },
    {
      title: t("contact.faq5"),
      body: t("contact.ans5"),
    },
    {
      title: t("contact.faq6"),
      body: t("contact.ans6"),
    },
    {
      title: t("contact.faq7"),
      body: t("contact.ans7"),
    },
    {
      title: t("contact.faq8"),
      body: t("contact.ans8"),
    },
    {
      title: t("contact.faq9"),
      body: t("contact.ans9"),
    },
  ];
  return (
    <section className="bg-blue-200">
      <section className="container [ lg:py-20 pt-[310px] pb-20 ]  ">
        <div>
          <h2 className="text-[56px] font-medium">FAQs</h2>
        </div>

        <section className="space-y-4 [ lg:mt-10 mt-5 ] ">
          <h2 className="my-8 text-3xl italic font-semibold font-inter ">
            Fuelmetrics{" "}
          </h2>
          <section
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="px-4 py-4 space-y-3 bg-white border cursor-pointer rounded-xl "
          >
            <div className="flex-between">
              <p className="text-base font-bold">{t("contact.faq1")}</p>
              <div>
                <img className="cursor-pointer" src={isOpen ? times : plus} />
              </div>
            </div>
            {isOpen && (
              <div className="w-10/12 pb-4 text-grey-900">
                {t("contact.ans1")}
                <div className="mt-4 space-y-4">
                  <p>
                    <span className="font-semibold">Remis</span>:{" "}
                    {t("contact.remis")}{" "}
                  </p>
                  <p>
                    <span className="font-semibold">Epump</span>:{" "}
                    {t("contact.epump")}{" "}
                  </p>
                  <p>
                    <span className="font-semibold">Gensys</span>:{" "}
                    {t("contact.gensys")}{" "}
                  </p>
                </div>
              </div>
            )}
          </section>
          {faqs.map((faq, index) => (
            <FAQItem faq={faq} key={index} />
          ))}

          <h2 className="my-8 text-3xl italic font-semibold font-inter ">
            Remis - Fleet Management & Fuel Voucher System{" "}
          </h2>
          {remisFaqs.map((faq, index) => (
            <FAQItem faq={faq} key={index} />
          ))}

          <h2 className="my-8 text-3xl italic font-semibold font-inter ">
            Epump - Fuel Station Management System{" "}
          </h2>
          {epumpFaqs.map((faq, index) => (
            <FAQItem faq={faq} key={index} />
          ))}
        </section>
      </section>
    </section>
  );
}
