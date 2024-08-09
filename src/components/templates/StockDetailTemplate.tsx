import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StockProfile from "../modules/StockProfile";
import StockScore from "../modules/StockScore/StockScore";
import StockPriceChart from "../modules/StockPriceChart/StockPriceChart";
import { useParams } from "react-router-dom";
import { useStockDetail } from "../../hooks/useStockDetail";
import SimilarStocks from "../modules/SimilarStocks/SimilaireStocks";
import StockDetailsHeader from "../modules/StockDetailsHeader";

interface StockDetailTemplateProps {}

const StockDetailTemplate: React.FC<StockDetailTemplateProps> = () => {
  const { symbol } = useParams();
  const { stock } = useStockDetail(symbol);
  return (
    <DashboardLayout>
      <StockDetailsHeader stockName={stock?.name} stockSymbol={stock?.symbol} />

      <div className="grid grid-cols-12 gap-6 p-4 ">
        <div className="md:col-span-6 col-span-12 lg:col-span-8">
          <SimilarStocks />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <StockScore
            score={stock?.score}
            marginOfSafety={stock?.safetyMargin}
          />
          <StockProfile
            className="my-2"
            country={stock?.country}
            industry={stock?.industry}
            about={`${stock?.about.substring(0, 100)}...`}
          />
        </div>
      </div>

      <StockPriceChart data={stock?.prices || []} />
    </DashboardLayout>
  );
};

export default StockDetailTemplate;
