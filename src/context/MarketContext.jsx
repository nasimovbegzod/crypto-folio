import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MarketContext = createContext();

export function MarketProvider({ children }) {
  const [watchlist, setWatchlist] = useState(null);

  async function fetchById(id) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching the product by ID:", error);
    }
  }

  return (
    <MarketContext.Provider value={{ watchlist, setWatchlist, fetchById }}>
      {children}
    </MarketContext.Provider>
  );
}
