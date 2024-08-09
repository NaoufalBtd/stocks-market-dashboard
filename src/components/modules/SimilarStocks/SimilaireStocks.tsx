import React from 'react';
import Card from '../../elements/Card';
import { Line } from 'react-chartjs-2';
import { getCardChartData } from '../../../utils';

interface SimilaireStocksProps {

}

const SimilarStocks: React.FC<SimilaireStocksProps> = () => {
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
          values: [40, 60, 45, 70, 80, 90, 100],
        },
        {
          symbol: "GOOGL",
          name: "Alphabet Inc.",
          sector: "Communication Services",
          industry: "Internet Content & Information",
          ImageUrl: "https://financialmodelingprep.com/image-stock/GOOGL.png",
          value: 123.45,
          percentageChange: 1.23,
          values: [44, 23, 45, 67, 89, 90, 100],
        },
        {
          symbol: "AMZN",
          name: "Amazon.com Inc.",
          sector: "Consumer Cyclical",
          industry: "Internet Retail",
          ImageUrl: "https://financialmodelingprep.com/image-stock/AMZN.png",
          value: 123.45,
          percentageChange: 1.23,
          values: [87, 90, 100, 120, 130, 140, 150],
        },
        {
          symbol: "FB",
          name: "Meta Platforms Inc.",
          sector: "Communication Services",
          industry: "Internet Content & Information",
          ImageUrl: "https://financialmodelingprep.com/image-stock/FB.png",
          value: 123.45,
          percentageChange: 1.23,
          values: [60,33, 45, 67, 60, 90, 100],
        },
      ],
      loading: false,
      error: null,
    };
  return (
    <Card title="Similaire Stocks">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Value</th>
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
    </Card>
  );
};

export default SimilarStocks;