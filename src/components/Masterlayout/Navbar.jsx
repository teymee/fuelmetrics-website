import React, { useState } from "react";
import { Link } from "react-router-dom";

// ASSETS
import logo from "@/assets/svg/FM-logo.svg";
import menu from "@/assets/svg/breadcrumb.svg";
import times from "@/assets/svg/x-mark.svg";

// HOOKS
import { useTranslator } from "@/hooks/useTranslator";

export default function Navbar() {
  const t = useTranslator();
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <section className="  w-full left-0  fixed top-4 z-50">
        <section className=" flex-between rounded-full [  lg:w-[60%] w-[80%] ] mx-auto px-6 py-3 bg-[#FDFDFD]">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <section className="flex-items-center gap-x-8">
            <div className=" nav-items font-medium ">
              <div className="lg:flex hidden gap-x-14">
                <Link to="/about">
                  <p className="nav-item"> {t("nav.about")}</p>
                </Link>

                <Link to="/career">
                  <p className="nav-item">{t("nav.career")}</p>
                </Link>

                <Link to="/gallery">
                  <p className="nav-item">{t("nav.gallery")}</p>
                </Link>
              </div>
            </div>
            <Link to="/contact">
              <button className=" lg:flex hidden border-primary  gap-x-2 rounded-full text-[13px] border-1 px-8 py-3 font-medium border-blue-400 text-blue-400">
                Call us now
              </button>
            </Link>
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
            <div className="absolute right-6 top-6">
              <img
                src={times}
                alt=""
                className="w-12"
                onClick={() => setOpen(!open)}
              />
            </div>

            <section className="flex flex-col items-center w-full h-full absolute top-[25%]  ">
              <div className=" flex flex-col font-inter space-y-10">
                <Link to="/">
                  <p className="nav-item"> {t("nav.home")}</p>
                </Link>
                <Link to="/about">
                  <p className="nav-item"> {t("nav.about")}</p>
                </Link>

                <Link to="/career">
                  <p className="nav-item">{t("nav.career")}</p>
                </Link>

                <Link to="/gallery">
                  <p className="nav-item">{t("nav.gallery")}</p>
                </Link>
              </div>

              <Link to="/contact">
                <button className=" mt-10 lg:flex  border-primary  gap-x-2 rounded-full text-[13px] border-1 px-8 py-3 font-medium border-blue-400 text-blue-400">
                  Call us now
                </button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </nav>
  );
}
