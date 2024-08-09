import React from "react";
import { Line } from "react-chartjs-2";
import { getCardChartData } from "../../../utils";

interface StockOverviewTableProps {}

const StockOverviewTable: React.FC<StockOverviewTableProps> = () => {
  // const stockOverviewData = useStocksOverview();
  const stockOverviewData = {
    stocksOverview: [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        sector: "Technology",
        industry: "Consumer Electronics",
        ImageUrl: "https://financialmodelingprep.com/image-stock/AAPL.png",
        value: 123.45,
        percentageChange: 1.23,
        values: [3, 4, 5, 2, 3, 4, 5],
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corporation",
        sector: "Technology",
        industry: "Software—Infrastructure",
        ImageUrl: "https://financialmodelingprep.com/image-stock/MSFT.png",
        value: 123.45,
        percentageChange: 1.23,
        values: [3, 4, 5, 2, 3, 4, 5],
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        sector: "Communication Services",
        industry: "Internet Content & Information",
        ImageUrl: "https://financialmodelingprep.com/image-stock/GOOGL.png",
        value: 123.45,
        percentageChange: 1.23,
        values: [3, 4, 5, 2, 3, 4, 5],
      },
      {
        symbol: "AMZN",
        name: "Amazon.com Inc.",
        sector: "Consumer Cyclical",
        industry: "Internet Retail",
        ImageUrl: "https://financialmodelingprep.com/image-stock/AMZN.png",
        value: 123.45,
        percentageChange: 1.23,
        values: [3, 4, 5, 2, 3, 4, 5],
      },
      {
        symbol: "FB",
        name: "Meta Platforms Inc.",
        sector: "Communication Services",
        industry: "Internet Content & Information",
        ImageUrl: "https://financialmodelingprep.com/image-stock/FB.png",
        value: 123.45,
        percentageChange: 1.23,
        values: [3, 4, 5, 2, 3, 4, 5],
      },
    ],
    loading: false,
    error: null,
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Industry</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stockOverviewData.stocksOverview.map((stock) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={stock.ImageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">{stock.symbol}</p>
                    <p className="text-sm">{stock.sector}</p>
                  </div>
                </div>
              </td>
              <td>
                <p>{stock.name}</p>
              </td>
              <td> {stock.industry}</td>
              <th className="w-2 h-16">
                <Line
                  height={50}
                  width={100}
                  data={getCardChartData(stock.values, { randomColor: true })}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: { display: false },
                      y: { display: false },
                    },
                    elements: {
                      line: {
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockOverviewTable;
