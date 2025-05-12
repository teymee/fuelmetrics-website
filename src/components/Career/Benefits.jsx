import React from "react";

// ASSETS
import gift from "@/assets/svg/gift.svg";
import heart from "@/assets/svg/heart.svg";
import calendar from "@/assets/svg/calendar.svg";
import benefitsImg from "@/assets/svg/benefits-img.svg";
import { useTranslator } from "@/hooks/useTranslator";
export default function Benefits() {
  const t = useTranslator()
  const benefits = [
    {
      img: {
        src: gift,
        isLeft: true,
      },
      bonus: "Competitive salary and performance bonuses",
      position: "[ lg:top-[-40px] lg:left-[80px]  3xl:left-[10%] ] [ lg:absolute relative ]",
    },
    {
      img: {
        src: heart,
        isLeft: true,
      },
      bonus: "Health & wellness benefits",
      position: "[ lg:bottom-30 lg:left-[80px] 3xl:left-[10%] ] [ lg:absolute relative]",
    },
    {
      img: {
        src: calendar,
        isLeft: false,
      },
      bonus: "Flexible work schedules (Remote/Hybrid options)",
      position: "[ lg:top-10 lg:right-[80px] 3xl:right-[15%] ] [ lg:absolute relative ]",
    },
    {
      img: {
        src: calendar,
        isLeft: false,
      },
      bonus: "Learning & development opportunities",
      position: "[ lg:bottom-40 lg:right-[80px] 3xl:right-[15%] ] [ lg:absolute relative ]",
    },
    {
      img: {
        src: calendar,
        isLeft: true,
      },
      bonus: "Team events & company retreats",
      position:
        "[ lg:bottom-[-10px] transform lg:-translate-x-1/2 ] [ lg:absolute relative ]",
    },
  ];
  return (
    <main className="py-20 [ lg:w-full container mx-auto rounded-3xl ]">
      <section>
        <div>
          <h1 className="[ lg:text-[56px] text-[28px] ]  font-medium text-center">
           {t('career.loveWorking')}
          </h1>
          <p className="subHeader">
          {t('career.subHeader')}
          </p>
        </div>

        <section className="py-20   ">
          <div className="center-content [ lg:w-[60%] container ] mx-auto relative flex-col">
            <img src={benefitsImg} alt="" />
            <article className="flex flex-col gap-y-2">
              {benefits.map((benefit, index) => {
                const { img, bonus, position } = benefit;
                return (
                  <section className="">
                    <div key={index} className={`${position}   `}>
                      <img
                        src={img.src}
                        alt=""
                        className={` top-[22px]  transform ${
                          img.isLeft
                            ? "left-1/2 -translate-x-1/2 lg:left-[-10px] lg:translate-x-0"
                            : "left-1/2 -translate-x-1/2 lg:right-[-300px] lg:left-auto lg:translate-x-0"
                        }  relative`}
                      />
                      <div className="bg-blue-200 pt-1 pb-4 px-1 w-[339px] rounded-sm">
                        <div className="bg-white rounded-sm">
                          <p className="text-base [ lg:text-left text-center ] px-5 text-grey-900 py-7">
                            {bonus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
