import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Masterlayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <section className="relative  mx-auto">
        <section>
          <Navbar />
        </section>
        <section className="">{children}</section>
        <Footer />
      </section>
    </>
  );
}
