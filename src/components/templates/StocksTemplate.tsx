import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StocksSearchInput from "../modules/StocksSearchInput";
import TrendingStocksCarousel from "../modules/TrendingStocksCarousel/TrendingStocksCarousel";
import StockOverviewTable from "../modules/StocksOverviewTable";
import AddButton from "../elements/AddButton";
import StockWatchlist from "../modules/StockWatchlist";

interface StocksTemplateProps {}

const StocksTemplate: React.FC<StocksTemplateProps> = () => {
  return (
    <DashboardLayout
      extraHeader={
        <div className="mt-10 p-4">
          <p className="text-xl font-bold my-3 text-center">
            Discover Trending Stocks 🔥
          </p>
          <StocksSearchInput />
        </div>
      }>

      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <h2 className="text-xl font-bold my-2">Trending Stocks</h2>
          <TrendingStocksCarousel />
        </div>
      </div>

      <div className="py-3 grid grid-cols-12 gap-2 my-4">
        <div className="col-span-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold my-2">Watchlist</h2>
            <AddButton
              onClick={() =>
                //todo: avoid using dom elements directly
                document.getElementById("watchlist_modal")?.showModal()
              }
            />
          </div>
          <StockWatchlist />
        </div>

        <div className="col-span-8">
          <h2 className="text-xl font-bold my-2">Stocks Overview</h2>
          <StockOverviewTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StocksTemplate;
