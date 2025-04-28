import React, { useState } from "react";
//ASSETS
import plus from "@/assets/svg/plus.svg";
import times from "@/assets/svg/times.svg";

export default function FAQItem({ faq }) {
  const { title, body } = faq;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="cursor-pointer border-2 border py-4 rounded-lg bg-white px-4 space-y-3 border-2">
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex-between"
      >
        <p className="font-bold text-base">{title}</p>
        <div>
          <img className="cursor-pointer" src={isOpen ? times : plus} />
        </div>
      </div>
      {isOpen && <div className="text-grey-900 w-10/12 pb-4">{body}</div>}
    </section>
  );
}
