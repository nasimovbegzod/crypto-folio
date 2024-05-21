import React, { useContext } from 'react'
import { MarketContext } from '../../context/MarketContext'

const SinglePage = () => {
  const {watchlist} = useContext(MarketContext)
  console.log(watchlist);
  return <div>{watchlist?.name}</div>;
}

export default SinglePage