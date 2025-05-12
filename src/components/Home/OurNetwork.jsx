//ASSETS
import worldMap from "@/assets/svg/world-map.svg";
import bicycle from "@/assets/svg/bicycle.svg";

import arrow from "@/assets/svg/white-arrow-right.svg";
import { useTranslator } from "@/hooks/useTranslator";

export default function OurNetwork() {
  const t = useTranslator();
  return (
    <main className="lg:py-20  [ lg:flex-items-center lg:flex-row flex flex-col space-y-4 ] 3xl:max-w-[120rem] 3xl:mx-auto">
      {/* SECTION MISSION */}
      <section className="[ lg:rounded-4xl rounded-2xl ] overflow-hidden bg-yellow-50 [ lg:w-[40%] w-[90%] mx-auto ] [ lg:ml-[5%] ] py-10 relative ">
        <div className="bg-red-900 rounded-full w-[5rem] h-[5rem] absolute bottom-20 left-[-50px] "></div>
        <section>
          <h1 className="text-center [ lg:text-[4rem] text-[1.375rem] ] [ lg:leading-16  leading-8 ]   text-grey-900 font-semibold font-satoshi [lg:py-10 py-5 ]">
            {t("home.mission")} <br />
            {t("home.philosophy")}
          </h1>

          <div className="flex-items-center gap-x-4  center-content">
            <hr className="w-1/3 text-yellow-600" />{" "}
            <img src={bicycle} alt="" />{" "}
            <hr className="w-1/3 text-yellow-600" />
          </div>

          <p className="text-center [ lg:text-lg text-sm ] font-medium [ lg:w-8/12 w-10/12 ] mx-auto mt-4 text-grey-700">
            {t("home.statement")}
          </p>

          <button className=" mb-4  mt-10 gap-x-2  flex-items-center bg-primary text-white rounded-full py-3 w-7/12 [ lg:text-lg text-sm ] font-medium mx-auto justify-center">
            {t("home.learnMore")} <img src={arrow} alt="" />
          </button>
        </section>
      </section>
      {/* SECTION MAP */}
      <section className="[lg:w-[60%]] space-y-4 ">
        <h1 className="[lg:text-[40px] text-2xl ] text-center font-medium text-grey-900">
          {t("home.lagosTurkey")}
        </h1>
        <img src={worldMap} alt="" className="w-full ml-[-5px]" />
      </section>
    </main>
  );
}
