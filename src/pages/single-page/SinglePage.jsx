import React, { useContext, useEffect, useState } from "react";
import { MarketContext } from "../../context/MarketContext";
import Navbar from "../header/Navbar";
import { useParams } from "react-router-dom";
import Diagramm from "../../components/Diagramm/Diagramm";

const SinglePage = () => {
  const [selected, setSelected] = useState(null);
  const { fetchById } = useContext(MarketContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchById(id);
      if (data) {
        setSelected(data);
      }
    };

    fetchData();
  }, [id, fetchById]);

  return (
    <>
      <Navbar />
      <main className="bg-bg_color-900 text-white min-h-lvh flex items-start">
        <aside className="w-1/3 px-5 border-r-2 border-r-[#808080]">
          <figure className="w-60 mx-auto">
            <img
              src={selected?.image?.large}
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>

          <div className="mt-5">
            <h2 className="text-4xl text-center font-semibold">
              {selected?.name}
            </h2>
            <p className="mt-5 text-sm font-thin">
              {selected?.description?.en.split(".")[0]}
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-10">
            <div className="flex gap-1">
              <h2 className="text-2xl">Rank:</h2>
              <p className="text-lg">{selected?.market_cap_rank}</p>
            </div>
            <div className="flex gap-1">
              <h2 className="text-2xl">Current Price:</h2>
              <p className="text-lg">
                ₹ {selected?.market_data?.current_price?.chf}
              </p>
            </div>
            <div className="flex gap-1">
              <h2 className="text-2xl">Market Cap:</h2>
              <p className="text-lg">
                ₹ {selected?.market_data?.market_cap?.chf}
              </p>
            </div>
          </div>
        </aside>

        <section className="flex-grow">
          <Diagramm />
        </section>
      </main>
    </>
  );
};

export default SinglePage;
