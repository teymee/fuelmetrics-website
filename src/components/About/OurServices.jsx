import React from "react";

export default function OurServices() {
  const services = [
    {
      title: "Software Hardware and SaaS",
      desc: "Our company offers software service for your business, hardware devices to bei nstalled be it for home personal or company use for efficient event monitoring, and Software as a service with business customization option",
    },

    {
      title: "Available service engineers",
      desc: "After installation, we have our engineers on ground to help you to maintain and service your home, business or station automation system for optimal efficiency",
    },

    {
      title: "Standby customer support",
      desc: "Suspendisse ac luctus odio. In ligula ex, tempor nec laoreet at, commodo in tortor. Nullam velit arcu, vulputate vitae mauris vel, venenatis dignissim nibh. Nulla sodales venenatis pretium.",
    },
  ];
  return (
    <section>
      {/* SECTION NOTE  */}
      <section>
        {services.map((service, index) => {
          const { title, desc } = service;
          return (
            <div key={index}>
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          );
        })}
      </section>

      {/* SECTION IMAGE  */}
      <section></section>
    </section>
  );
}
