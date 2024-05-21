import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-bg_color-900">
      <div className="flex justify-between items-center main-container h-16 ">
        <h1 className="text-och_blue-100" onClick={() => navigate("/")}>
          CRYPTOFOLIO
        </h1>
        <div>
          <select className="mr-3">
            <option>USD</option>
            <option>UZS</option>
            <option>RUB</option>
          </select>
          <button className="bg-och_blue-100 px-4 py-1 rounded-sm">
            WATCH LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
