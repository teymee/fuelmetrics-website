//HOOKS
// import { useTranslator } from "@/hooks/useTranslator";

//ASSETS
import remisLogo from "@/assets/svg/remis-logo.svg";
import epumpLogo from "@/assets/svg/epump-logo.svg";
import epumpDash from "@/assets/svg/epump-dash.svg";
import remisDash from "@/assets/svg/remis-dash.svg";
import gensysLogo from "@/assets/svg/gensys-logo.svg";
import arrow from "@/assets/svg/white-arrow-right.svg";

export default function OurInnovation() {
  // const t = useTranslator();

  //USESTATE
  const solutions = [
    {
      logo: epumpLogo,
      title: "Epump",
      desc: "Explore ePump Africa's sophisticated web-based station monitoring platform, designed to empower station owners with efficient fuel inventory management, pump monitoring, pricing control.",
      img: epumpDash,
      color: " #00591d",
    },
    {
      logo: remisLogo,
      title: "Remis",
      desc: "Multiple fuel payment options, monitored spending, outstanding insights and efficient expense management. ",
      img: remisDash,
      color: "#001755",
    },
    {
      logo: gensysLogo,
      title: "Gensys",
      desc: "Stay ahead of business fuel management, monitor power usage and avoid discrepancies in fuel purchase with Gensys.",
      img: remisDash,
      color: "#600070",
    },
  ];

  return (
    <main className="container">
      <section className=" bg-white-500 py-20 rounded-3xl top-[-40px] relative solution ">
        <section className="container">
          <section className="text-center  space-y-2">
            <h1 className="[ lg:text-[3rem] text-[1.375rem] ] font-semibold text-black font-inter">
              Our Innovation, <br className="lg:hidden" />
              Your Solutions
            </h1>
            <p className=" text-grey-800 [ lg:text-lg text-sm ] [ lg:w-[40%] w-[80%] ] mx-auto [lg:leading-6]">
              Seamless, scalable, and built for the future. Our solutions
              transform the way businesses scale, grow, and excel in a
              digital-first world.
            </p>
          </section>

          <section className=" [ lg:flex-between lg:flex-row flex flex-col ] [ lg:gap-x-6 gap-y-4 lg:gap-y-0 ] [ lg:mt-18 mt-8 ] ">
            {solutions.map((solution, index) => {
              const { logo, title, desc, img, color } = solution;

              return (
                <article
                  key={index}
                  style={{ backgroundColor: color }}
                  className="relative [ lg:h-[31.25rem] h-[27rem] ] rounded-3xl px-8 flex flex-col [ lg:gap-y-4 gap-y-3 ] py-10 text-white w-full "
                >
                  <div>
                    <img
                      src={logo}
                      alt={title}
                      className="  rounded-full"
                    />
                  </div>

                  <h1 className="text-2xl font-medium ">{title}</h1>

                  <p className="[ lg:text-base text-sm ]">{desc}</p>

                  <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[20rem]  ">
                    <img
                      src={img}
                      alt={title}
                      className=" block max-w-[26.8rem] [ lg:h-[10.6rem] h-[8rem] ] w-full rounded-full"
                    />
                  </div>

                  <p className="flex-items-center absolute bottom-6 [ lg:left-18 left-1/2 transform -translate-x-1/2 ] gap-x-2">
                    Explore <img src={arrow} alt="" />
                  </p>
                </article>
              );
            })}
          </section>
        </section>
      </section>
    </main>
  );
}
