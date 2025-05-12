import React from "react";

// ASSETS
import grid1 from "@/assets/svg/grid1.svg";
import grid2 from "@/assets/svg/grid2.svg";
import grid3 from "@/assets/svg/grid3.svg";
import grid4 from "@/assets/svg/grid4.svg";
import grid5 from "@/assets/svg/grid5.svg";
import grid6 from "@/assets/svg/grid6.svg";
import grid7 from "@/assets/svg/grid7.svg";
import grid8 from "@/assets/svg/grid8.svg";
import grid9 from "@/assets/svg/grid9.svg";
import grid10 from "@/assets/svg/grid10.svg";
import grid11 from "@/assets/svg/grid11.svg";
import grid12 from "@/assets/svg/grid12.svg";
import { useTranslator } from "@/hooks/useTranslator";

export default function PhotoGallery() {
  const t = useTranslator()
  return (
    <section className="py-20 container">
      <div className="text-center">
        <h2 className="header">{t('gallery.photoGallery')}</h2>
        <p className="subHeader">
        {t('gallery.subHeader')}
        </p>
      </div>

      {/* SECTION GALLERY  */}
      <section className="lg:gap-4  gap-2 columns-2 lg:columns-4 w-full mt-8 ">
        {/* first row  */}
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid1} alt="" className="rounded-md w-full object-cover" />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid2} alt="" className="rounded-md w-full object-cover" />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid3} alt="" className="rounded-md w-full object-cover" />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid4} alt="" className="rounded-md w-full object-cover" />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid5} alt="" className="rounded-md w-full object-cover " />
        </div>
        {/*  */}
        {/* second row  */}
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid6} alt="" className="rounded-md w-full object-cover " />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid7} alt="" className="rounded-md w-full object-cover " />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid8} alt="" className="rounded-md w-full object-cover " />
        </div>

        {/*  */}
        {/* third row  */}
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img src={grid9} alt="" className="rounded-md w-full object-cover " />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img
            src={grid10}
            alt=""
            className="rounded-md w-full object-cover "
          />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img
            src={grid11}
            alt=""
            className="rounded-md w-full object-cover "
          />
        </div>
        <div className=" [ mb-2 lg:mb-4 ] break-inside-avoid">
          <img
            src={grid12}
            alt=""
            className="rounded-md w-full object-cover "
          />
        </div>
        {/*  */}
      </section>
    </section>
  );
}

