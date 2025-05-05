import React, { useState } from "react";

//ASSETS
import twitter from "@/assets/svg/white-x.svg";
import insta from "@/assets/svg/white-insta.svg";
// import whiteLogo from "@/assets/svg/white-logo.svg";
// import youtube from "@/assets/svg/white-youtube.svg";
import linkedIn from "@/assets/svg/white-linkedIn.svg";

//HOOKS
import { useTranslator } from "@/hooks/useTranslator";
import { Link } from "react-router-dom";

export default function Footer() {
  const t = useTranslator();

  const [email, setEmail] = useState("");

  const mailtoLink = `mailto:info@fuelmetrics.com.ng?subject=${encodeURIComponent(
    "Subscribe me to updates"
  )}&body=${encodeURIComponent(``)}`;

  return (
    <footer className="footer py-10">
      <section className="container bg-white/10 pb-20 rounded-3xl px-4 backdrop-blur-[93px] ">
        <section className="lg:w-[90%] mx-auto text-white">
          <h1 className="[ lg:text-[8rem] text-[4rem] ] text-white">
            Let's <span className="hidden lg:inline">⏤</span>Talk
          </h1>

          <section className=" [ flex lg:flex-row flex-col ] justify-between items-start gap-x-6 ">
            <section className="lg:w-[35%] lg:space-y-20">
              <section>
                <p className="text-base"> {t("footer.getUpdated")}</p>
                <div className="flex-responsive [lg:items-center  ]  gap-2 mt-2 ">
                  <input
                    type="email"
                    placeholder={t("footer.enterEmail")}
                    className="rounded-full px-4 py-2 bg-white placeholder:text-G-900 outline-none text-black"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <a href={mailtoLink}>
                    <button className="bg-primary px-4 py-2 rounded-full w-fit">
                      {t("footer.getUpdate")}
                    </button>
                  </a>
                </div>
              </section>

              {/* SECTION ADDRESS & CONTACT  */}
              <section className="flex justify-between flex-responsive gap-4  mt-4 ">
                <section className="">
                  <p className="font-medium [ text-2xl lg:text-base ]">
                    Address
                  </p>

                  <div className="mt-2 ">
                    <p className="font-normal  text-base">
                      18b ilupeju byepass, ilupeju,{" "}
                      <br className="hidden lg:block" /> Lagos, Nigeria
                    </p>
                  </div>
                </section>

                <section className="">
                  <p className="font-medium [ text-2xl lg:text-base ]">
                    Contact
                  </p>

                  <div className="mt-2 ">
                    <div className="space-y-2 ">
                      <a href="tel:+2348509409952">
                      <p>+234 850 940 9952</p>
                      </a>
                     
                      <a href={mailtoLink} className="mt-2">
                        <p>info@fuelmetrics.com.ng</p>
                      </a>
                    </div>
                  </div>
                </section>
              </section>
              {/*  */}
            </section>

            <section className="mt-4 lg:mt-0">
              <h3 className="font-bold text-2xl">{t("footer.company")}</h3>
              <div className="font-normal my-4 text-base space-y-2">
                <Link to="/about">
                  <p className=""> {t("footer.aboutUs")}</p>
                </Link>
                <Link to="/contact">
                  <p className="my-2"> {t("nav.contactUs")}</p>
                </Link>
                <p className=""> {t("footer.privacyPolicy")}</p>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-2xl">{t("footer.services")}</h3>
              <div className="font-normal my-4 text-base space-y-2">
                <Link to="https://www.instagram.com/epumpafrica/?hl=en">
                  <p className=""> {t("footer.epump")}</p>
                </Link>
                <Link to="https://www.instagram.com/remisafrica/?hl=en">
                  <p className="my-2"> {t("footer.remis")}</p>
                </Link>

                <p className=""> {t("footer.gensys")}</p>
                <p className=""> {t("footer.chargx")}</p>
              </div>
            </section>

            <section className="flex-items-center ">
              <div className="border border-red-800 rounded-full p-8 ml-[-10px]">
                <Link to="https://www.instagram.com/epumpafrica/?hl=en">
                  <img src={insta} alt="" />
                </Link>
              </div>

              <div className="border border-purple-100 rounded-full p-8 ml-[-10px]">
                <Link to="https://x.com/EpumpAfrica">
                  <img src={twitter} alt="" />
                </Link>
              </div>

              <div className="border border-purple-100 rounded-full p-8 ml-[-10px]">
                <Link to="https://www.linkedin.com/company/epumpafrica/posts/?feedView=all">
                  <img src={linkedIn} alt="" />
                </Link>
              </div>
              {/* <img src={youtube} alt="" className="border rounded-full p-8" /> */}
            </section>
          </section>

          <section className="border-t-2 border-white mt-10 pt-4 flex-between">
            <p>Copyright ©2025 Fuelmetrics Ltd. </p>
          </section>
        </section>
      </section>
    </footer>
  );
}
