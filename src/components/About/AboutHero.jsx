import React from "react";

//ASSETS
import hero from "@/assets/svg/about-hero.svg";
import hero2 from "@/assets/svg/about-hero2.svg";

export default function AboutHero() {
  return (
    <main className=" container lg:pt-10  h-screen 3xl:h-[60vh]  ">
      <section className="flex-between flex-responsive  ">
        <section className="[ lg:space-y-8 space-y-8 ] [ lg:w-1/2 w-full ]">
          <h1 className="[ lg:text-[4rem] text-[2rem] ] [ lg:text-left  text-center ] font-medium">
            Know more about <span className="text-fm-secondary-500 ">us</span>
          </h1>

          <div className=" lg:hidden flex justify-center ml-4">
            <img src={hero2} className="center-content w-[80%] mx-auto " />
          </div>

          <p className=" [ lg:w-9/12 px-2 lg:px-0  ] [ lg:text-left  text-center ] [ lg:text-base text-sm ] text-grey-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor lacus a metus accumsan, ac semper dui maximus. Proin eu
            sem nec nibh lacinia lobortis. Aliquam feugiat eu lacus eleifend
            scelerisque. Duis lorem sem, imperdiet eget risus quis, varius
            volutpat ligula.
          </p>

          <div className="lg:w-fit rounded-xl bg-[#EFF4FF] text-center flex-items-center flex-responsive gap-x-10 px-6 py-4  [ lg:gap-y-10 gap-y-4 ]">
            <div className="lg:border-r-4 pr-2 lg:border-r-white ">
              <h3 className="text-grey-900 lg:text-lg text-[10px] font-medium">
                Our partner companies
              </h3>
              <p className="text-primary font-semibold [  text-[24px] lg:text-[2.5rem] ] ">
                36
              </p>
            </div>

            <div className="lg:border-r-4 pr-2 lg:border-r-white ">
              <h3 className="text-grey-900 lg:text-lg text-[10px] font-medium">
                Our service reach
              </h3>
              <p className="text-primary font-semibold [  text-[24px] lg:text-[2.5rem] ] ">
                144
              </p>
            </div>

            <div className="pr-4">
              <h3 className="text-grey-900 lg:text-lg text-[10px] font-medium">
                Future projection
              </h3>
              <p className="text-primary font-semibold [  text-[24px] lg:text-[2.5rem] ] ">
                1000+
              </p>
            </div>
          </div>
        </section>
        <section>
          <img src={hero} alt="" className="lg:flex hidden" />
        </section>
      </section>
    </main>
  );
}
