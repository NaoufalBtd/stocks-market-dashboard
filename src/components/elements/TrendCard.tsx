import React from 'react';
import { Line } from "react-chartjs-2";
import { getCardChartData } from '../../utils';

interface TrendCardProps {
  title: string;
  value: string;
  percentage: number;
  values: number[];
}

const TrendCard: React.FC<TrendCardProps> = ({
  title,
  value,
  percentage,
  values,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl relative overflow-hidden border-2 border-gray-200">
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-semibold">{value}</p>
            <p
              className={`text-sm ${
                percentage >= 0 ? "text-green-500" : "text-red-500"
              }`}>
              {percentage >= 0 ? "+" : ""}
              {percentage.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
        <Line
          data={getCardChartData(values)}
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
      </div>
    </div>
  );
};

export default TrendCard;