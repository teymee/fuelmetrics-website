import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// ASSETS
import logo from "@/assets/svg/FM-logo.svg";
import menu from "@/assets/svg/breadcrumb.svg";
import times from "@/assets/svg/x-mark.svg";

// HOOKS
import { useTranslator } from "@/hooks/useTranslator";
import i18n from "@/i18n";

export default function Navbar() {
  const t = useTranslator();
  const [open, setOpen] = useState(false);
  console.log(i18n.language);

  const toggleLang = () => {
    const newLang = i18n.language === "en-GB" ? "fr" : "en-GB";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav>
      <section className="  w-full left-0  fixed top-4 z-50">
        <section className=" flex-between rounded-full [  lg:w-[60%] w-[80%] ] mx-auto px-6 py-3 bg-[#FDFDFD] ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-nav" : undefined)}
            end
          >
            <img src={logo} alt="" className="lg:w-auto w-16" />
          </NavLink>

          <section className="flex-items-center gap-x-8">
            <div className=" nav-items font-medium ">
              <div className="lg:flex hidden gap-x-14">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-nav" : undefined
                  }
                >
                  <p > {t("nav.about")}</p>
                </NavLink>

                <NavLink to="/career">
                  <p className="nav-item">{t("nav.career")}</p>
                </NavLink>

                <NavLink to="/gallery">
                  <p className="nav-item">{t("nav.gallery")}</p>
                </NavLink>
              </div>
            </div>

            <NavLink to="/contact">
              <button className=" lg:flex hidden border-primary  gap-x-2 rounded-full text-[13px] border-1 px-8 py-3 font-medium border-blue-400 text-blue-400">
                {t("nav.contactUs")}
              </button>
            </NavLink>

            {/* change language  */}
            {/* <button
              onClick={toggleLang}
              className=" lg:flex hidden border-primary cursor-pointer gap-x-2 rounded-full text-[13px] border-1 px-8 py-3 font-medium border-blue-400 text-blue-400"
            >
              Change language {i18n.language}
            </button> */}
          </section>

          <div className="block lg:hidden">
            <img src={menu} alt="" onClick={() => setOpen(!open)} />
          </div>

          {/* mobile nav  */}

          <section
            className={`bg-white absolute w-full  h-screen top-[-17px]  lg:hidden transition-all duration-500 ease-in-out ${
              open ? "left-0 opacity-100" : "left-[490px] opacity-0"
            }`}
          >
            <div className="absolute right-6 top-6 ">
              <img
                src={times}
                alt=""
                className="w-12"
                onClick={() => setOpen(!open)}
              />
            </div>

            <section className="flex flex-col items-center w-full h-full absolute top-[25%]  ">
              <div className=" flex flex-col font-inter space-y-10">
                <NavLink to="/">
                  <p className="nav-item"> {t("nav.home")}</p>
                </NavLink>
                <NavLink to="/about">
                  <p className="nav-item"> {t("nav.about")}</p>
                </NavLink>

                <NavLink to="/career">
                  <p className="nav-item">{t("nav.career")}</p>
                </NavLink>

                <NavLink to="/gallery">
                  <p className="nav-item">{t("nav.gallery")}</p>
                </NavLink>
              </div>

              {/* change language  */}
              {/* <button onClick={toggleLang}>
                Change language ({i18n.language})
              </button> */}
              {/*  */}

              <NavLink to="/contact">
                <button className=" mt-10 lg:flex  border-primary  gap-x-2 rounded-full text-[13px] border-1 px-8 py-3 font-medium border-blue-400 text-blue-400">
                  {t("nav.contactUs")}
                </button>
              </NavLink>
            </section>
          </section>
        </section>
      </section>
    </nav>
  );
}
