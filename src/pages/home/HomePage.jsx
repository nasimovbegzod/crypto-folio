import { useContext, useEffect, useState } from "react";
import Navbar from "../header/Navbar";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { MarketContext } from "../../context/MarketContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [peerPage, setPeerPage] = useState(10);

  const { setWatchlist } = useContext(MarketContext);
  const navigate = useNavigate()

  useEffect(() => {
    axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=${peerPage}&page=${page}&sparkline=false&price_change_percentage=24h`
    )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [page,peerPage]);

  console.log(data);
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
        <div className="flex flex-col main-container ">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-[#87CEEB]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Coin
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        24h Change
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Market Cap
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {data?.map((item, index) => (
                      <tr onClick={() => {
                        setWatchlist(item);
                        navigate(`/single/${item?.id}`)
                      }} key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          <div className="flex items-center gap-3">
                            <img className="w-10" src={item?.image} alt="Burasim" />
                            <span>
                              <h2>{item?.symbol}</h2>
                              <p>{item?.name}</p>
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          ₹ 3,045,665.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          <div className="flex items-center gap-3">
                            <FaEye />
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

              <button onClick={() => setPage(page + 1)} className="text-white ml-10">
                Page {page}
              </button>

              <button onClick={() => setPeerPage(peerPage + 10)} className="text-white ml-10">
                Per Page {peerPage}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
