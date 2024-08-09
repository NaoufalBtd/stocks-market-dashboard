import React from "react";
import WatchListModal from "./WatchListModal";

interface StockWatchlistProps {}

const StockWatchlist: React.FC<StockWatchlistProps> = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl p-4">
        <img className="mx-auto" src="/wish-icon.png" alt="wish icon" />

        <p className="text-center mt-2 text-lg font-bold">
          Your watchlist is empty
        </p>
      </div>
      <WatchListModal />
    </>
  );
};

export default StockWatchlist;
