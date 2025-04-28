import React from "react";

export default function OpenPositions() {
  const positions = [
    {
      title: "Front-end engineer",
      desc: "Front-end engineering department at Fuelmetrics is a highly multi-functional team, which supports the management to analyse, insight, and execute on key strategic initiatives.",
      period: "Full time, Lagos",
    },
    {
      title: "Sales Marketer",
      desc: "Front-end engineering department at Fuelmetrics is a highly multi-functional team, which supports the management to analyse, insight, and execute on key strategic initiatives.",
      period: "Full time, Lagos",
    },
    {
        title: "Front-end engineer",
      desc: "Front-end engineering department at Fuelmetrics is a highly multi-functional team, which supports the management to analyse, insight, and execute on key strategic initiatives.",
      period: "Full time, Lagos",
    },
    {
      title: "Sales Marketer",
      desc: "Front-end engineering department at Fuelmetrics is a highly multi-functional team, which supports the management to analyse, insight, and execute on key strategic initiatives.",
      period: "Full time, Lagos",
    },
  ];
  return (
    <main className="py-20 container  [ lg:space-y-20 space-y-8 ]">
      <div className="text-center">
        <h1 className="[ lg:text-[56px] text-[28px] ] font-medium">
          Open positions
        </h1>
        <p className="subHeader">Many reasons to be part of Fuelmetrics</p>
      </div>

      <section className=" container [ lg:space-y-14 space-y-8 ] ">
        {positions?.map((position, index) => {
          const { title, desc, period } = position;
          return (
            <div
              key={index}
              className="bg-blue-100 rounded-xl py-10 flex-between  [ lg:px-20 px-8 ] [ lg:flex-row flex-col  ] "
            >
              <div className="[ lg:w-[60%] ] space-y-4">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-G-900 text-sm">{desc}</p>
                <p className="text-G-900 font-semibold text-sm">{period}</p>
              </div>

              <button className=" text-white rounded-full bg-primary [ flex justify-items-end self-end ] [ lg:px-14 px-8 ] [ lg:py-4 py-2 ] ">Apply</button>
            </div>
          );
        })}
      </section>
    </main>
  );
}
