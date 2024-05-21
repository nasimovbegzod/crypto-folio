import React from "react";
import Navbar from "../header/Navbar";

const HomePage = () => {
  return (
    <main className="bg-[#15171B]">
      <Navbar />
      <section className="bg-hero-pattern bg-cover h-[450px] bg-center">
        <div className="main-container text-5xl text-center text-och_blue-100">
          CRYPTOFOLIO WATCH LIST
        </div>
      </section>

      <section className="pt-2">
        <h1
          className="text-4xl text-center text-white font-thin"
          style={{ imageRendering: "pixelated" }}
        >
          Cryptocurrency Prices by Market Cap
        </h1>
      </section>
    </main>
  );
};

export default HomePage;
