import React from "react";
import Navbar from "../header/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/Hero/ethereum.png.png";
import img2 from "../../assets/Hero/xrp-symbol-white-128.png.png";
import img3 from "../../assets/Hero/solana.png.png";
import img4 from "../../assets/Hero/bnb-icon2_2x.png.png";
const HomePage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const testdata = [
    {
      id: "",
    },
  ];
  return (
    <main className="bg-[#15171B]">
      <Navbar />
      <section className="bg-hero-pattern bg-cover h-[450px] bg-center">
        <div className="main-container">
          <h1 className="pt-24 text-6xl text-center text-och_blue-100 font-semibold">
            CRYPTOFOLIO WATCH LIST
          </h1>
          <p className="mt-2 mb-11 text-white text-center">
            Get all the Info regarding your favorite Crypto Currency
          </p>
        </div>

        <div className="main-container pt-7">
          <Slider {...settings}>
            <div className="flex justify-center">
              <div className="bg-slate-20 w-6/12">
                <figure className="w-24 h-2w-24 rounded-xl mx-auto">
                  <img
                    src={img1}
                    alt="efir"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="flex flex-col text-white text-center ">
                  <div className="flex justify-center">
                    <p>ETH</p>
                    <span className="text-[#0ECB81]">+1.66%</span>
                  </div>

                  <p className="text-xl">₹ 159,249.00</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-20 w-6/12">
                <figure className="w-24 h-2w-24 rounded-xl mx-auto">
                  <img
                    src={img2}
                    alt="efir"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="flex flex-col text-white text-center ">
                  <div className="flex justify-center">
                    <p>XRP</p>
                    <span className="text-[#0ECB81]">+3.21%</span>
                  </div>

                  <p className="text-xl">₹ 58.08</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-20 w-6/12">
                <figure className="w-24 h-2w-24 rounded-xl mx-auto">
                  <img
                    src={img3}
                    alt="efir"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="flex flex-col text-white text-center ">
                  <div className="flex justify-center">
                    <p>SOL</p>
                    <span className="text-[#0ECB81]">+1.66%</span>
                  </div>

                  <p className="text-xl">₹ 159,249.00</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-20 w-6/12">
                <figure className="w-24 h-2w-24 rounded-xl mx-auto">
                  <img
                    src={img4}
                    alt="efir"
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="flex flex-col text-white text-center ">
                  <div className="flex justify-center">
                    <p>ETH</p>
                    <span className="text-[#0ECB81]">+1.66%</span>
                  </div>

                  <p className="text-xl">₹ 159,249.00</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="main-container pt-2">
        <h2
          className="text-4xl text-center text-white font-thin"
          style={{ imageRendering: "pixelated" }}
        >
          Cryptocurrency Prices by Market Cap
        </h2>

        <input
          type="text"
          className="outline-none border-2 bg-transparent border-[#4A4C4F] w-full mt-2 px-3 py-2 roun"
          placeholder="Search For a Crypto Currency.."
        />
      </section>

      <section></section>
    </main>
  );
};

export default HomePage;
