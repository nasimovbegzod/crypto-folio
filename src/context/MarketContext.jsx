import { useState, createContext } from "react";

export const MarketContext = createContext();

export function MarketProvider({ children }) {
  const [watchlist, setWatchlist] = useState(null);

  return (
    <MarketContext.Provider value={{watchlist, setWatchlist}}>
      {children}
    </MarketContext.Provider>
  );
}
