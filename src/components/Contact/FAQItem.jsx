import React, { useState } from "react";
//ASSETS
import plus from "@/assets/svg/plus.svg";
import times from "@/assets/svg/times.svg";

export default function FAQItem({ faq }) {
  const { title, body } = faq;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      className="px-4 py-4 space-y-3 bg-white border cursor-pointer rounded-xl "
    >
      <div className="flex-between">
        <p className="text-base font-bold">{title}</p>
        <div>
          <img className="cursor-pointer" src={isOpen ? times : plus} />
        </div>
      </div>
      {isOpen && <div className="w-10/12 pb-4 text-grey-900">{body}</div>}
    </section>
  );
}
