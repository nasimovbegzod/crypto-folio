import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MarketContext } from "../../context/MarketContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../header/Navbar";
import axios from "axios";
import img1 from "../../assets/Hero/ethereum.png.png";
import img2 from "../../assets/Hero/xrp-symbol-white-128.png.png";
import img3 from "../../assets/Hero/solana.png.png";
import img4 from "../../assets/Hero/bnb-icon2_2x.png.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [peerPage, setPeerPage] = useState(10);
  const [active, setActice] = useState(false);
  const [watchList, setWatchList] = useState(() => {
    const savedWatchList = localStorage.getItem("watchList");
    return savedWatchList ? JSON.parse(savedWatchList) : [];
  });
  const { setWatchlist } = useContext(MarketContext);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  useEffect(() => {
    axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=${peerPage}&page=${page}&sparkline=false&price_change_percentage=24h`
    )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [page, peerPage]);
  function handleAddSelect(item, event) {
    event.stopPropagation()
    setWatchList((prevWatchList) => [...prevWatchList, item]);
  }

  function handleRemoveCrypto(id) {
    setWatchList((prevWatchList) =>
      prevWatchList.filter((item) => item.id !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);
  return (
    <main className="bg-[#15171B]">
      <Navbar setActice={setActice} />
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
        <h1
          className="text-4xl text-center text-white font-thin mt-5"
          style={{ imageRendering: "pixelated" }}
        >
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="flex flex-col main-container ">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden mt-5">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-[#87CEEB]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-semibold text-bg_color-900  uppercase dark:text-neutral-500"
                      >
                        Coin
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-semibold text-bg_color-900  uppercase dark:text-neutral-500"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-semibold text-bg_color-900  uppercase dark:text-neutral-500"
                      >
                        24h Change
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-semibold text-bg_color-900  uppercase dark:text-neutral-500"
                      >
                        Market Cap
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {data?.map((item, index) => (
                      <tr
                        onClick={() => {
                          setWatchlist(item);
                          navigate(`/single/${item?.id}`);
                        }}
                        key={index}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          <div className="flex items-center gap-3 text-white">
                            <img
                              className="w-10"
                              src={item?.image}
                              alt="Burasim"
                            />
                            <span>
                              <h2 className="uppercase">{item?.symbol}</h2>
                              <p>{item?.name}</p>
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-white">
                          ₹ {item.current_price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          <div className="flex items-center gap-3 text-white">
                            <button
                              className="text-lg hover:scale-110 cursor-pointer transition-transform z-30"
                              onClick={(event) => handleAddSelect(item, event)}
                            >
                              <FaEye />
                            </button>
                            <p>+3.59%</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-neutral-200">
                          ₹ 59,555,497M
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center gap-3 mt-6">
                <button
                  onClick={() => setPage(page + 1)}
                  className="bg-och_blue-100 px-4 py-1 rounded-sm"
                >
                  Page/{page}
                </button>

                <button
                  onClick={() => setPeerPage(peerPage + 10)}
                  className="bg-och_blue-100 px-4 py-1 rounded-sm"
                >
                  Per Page/{peerPage}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {active && (
        <section className="fixed top-0 right-0 h-full w-1/4 bg-[#515151] px-5 transition">
          <header className="uppercase text-white text-center mt-3 text-2xl">
            Watchlist
          </header>

          {watchList?.length ? (
            <div className="grid grid-cols-2 gap-7 mt-3">
              {watchList.map((item) => {
                return (
                  <div
                    className="bg-[#14161A] text-white rounded-2xl px-5 py-4"
                    key={item?.id}
                  >
                    <figure className="w-full">
                      <img
                        src={item?.image}
                        alt={"CRYPTO ICON"}
                        className="w-full h-full object-cover"
                      />
                    </figure>

                    <div className="text-center pt-2">
                      <p className="text-white">₹ {item?.current_price}</p>
                      <button
                        className="bg-[#FF0000] mt-3 px-4"
                        onClick={() => handleRemoveCrypto(item?.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-white text-xl mt-4 text-center">
              You are not select any crypto
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default HomePage;
