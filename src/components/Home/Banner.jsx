//ASSETS
import "./home.css";
// import arrow from "@/assets/svg/arrow-tl.svg";
import GIG from "@/assets/svg/GIG.svg";
import globe from "@/assets/svg/hero-globe.svg";
import nnpc from "@/assets/svg/white-nnpc.svg";
import jumia from "@/assets/svg/white-jumia.svg";
import ardova from "@/assets/svg/white-ardova.svg";

//HOOKS
import { useTranslator } from "@/hooks/useTranslator";

export default function Banner() {
  const t = useTranslator();
  return (
    <section className="">
      <section className="banner relative  [ lg:pt-[6%] pt-[20%] ] h-screen 3xl:h-[60vh]  ">
        <section className="container [ flex-responsive  justify-between ]">
          <section className=" py-8 space-y-4  [ lg:text-left text-center ] lg:w-[55%] ">
            {/* SECTION: BANNER TEXT*/}

            <h1 className=" text-blue-500 [ lg:text-[72px] text-[28px] ] font-medium [ lg:leading-20 leading-8  ] capitalize  ">
              {t("home.mainDesc1")}
              {/* <br className="hidden lg:block" />{" "} */}
              {t("home.mainDesc2")}
              <span className="text-fm-secondary-500 ">
                {t("home.mainDesc3")}{" "}
              </span>
            </h1>

            {/* SECTION CONTACT US  */}
            <div>
              <p className="text-G-900 lg:w-[80%] font-medium [ lg:text-base text-sm  ]">
                {t("home.desc")}
              </p>
            </div>
            {/* <div className=" bg-white/30 w-fit backdrop-blur-md mt-10 rounded-full px-3 py-2">
              <button className="flex-items-center justify-between w-[227px]  bg-white rounded-full  text-center text-base font-medium py-1 pl-[54px] pr-[8px] ">
                <span className="">Contact us</span>

                <img src={arrow} alt="" className=" " />
              </button>
            </div> */}

            <div>
              <img
                src={globe}
                alt=""
                className="block lg:hidden w-[70%] mx-auto"
              />
            </div>
            <section className=" lg:w-fit w-full [ lg:px-4 px-4 ] flex-items-center [ lg:gap-x-4 gap-x-2 ]  transition-all duration-500 ease-in-out  py-2 cus-avatar  rounded-full  bg-blue-500/82 [ lg:mt-16 mt-8 ]  ">
              <div className="flex space-x-[-12px] hover:space-x-1 cursor-pointer">
                <img src={GIG} alt="" /> <img src={nnpc} alt="" />{" "}
                <img src={ardova} alt="" /> <img src={jumia} alt="" />{" "}
              </div>

              <div className="text-white [ text-sm lg:text-base ]">
                <p>{t("home.trusted")}</p>
              </div>
            </section>
          </section>

          <div>
            <img src={globe} alt="" className="lg:block hidden" />
          </div>
        </section>
      </section>
    </section>
  );
}
