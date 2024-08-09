import React from 'react';
import { Line } from 'react-chartjs-2';
import { generateChartLabelsByTimeIntervals, generateTimeIntervalLabel } from '../../../utils';
import ChartHeader from './ChartHeader';
import { calculatePercentageChange } from '../../../utils/stocksUtils';
import Card from '../../elements/Card';


const getChartData = (data: number[]) => ({
  labels: generateChartLabelsByTimeIntervals("1w"),
  datasets: [
    {
      label: "Price",
      data: data,
      fill: false,
      borderColor: "#4F46E5",
      backgroundColor: "#4F46E5",
      pointRadius: 0,
      borderWidth: 3,
      tension: 0.4,
    },
  ],
});
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#4F46E5",
      titleColor: "#fff",
      bodyColor: "#fff",
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#E5E7EB", // Tailwind's gray-200
        borderDash: [5, 5],
      },
      ticks: {
        callback: (value: string | number) => `$${value}`,
      },
    },
  },
};

interface StockPriceChartProps {
  data: number[];
}
const StockPriceChart: React.FC<StockPriceChartProps> = ({data}) => {
  const timeInterval = "1w";
  const timeIntervalLabel = generateTimeIntervalLabel(timeInterval);
  const chartData = getChartData(data);
  const percentageChange = data ? calculatePercentageChange(data[0], data[data.length - 1]) : 0;

  return (
    <Card title="Stock Price">
      <ChartHeader
        timeIntervalLabel={timeIntervalLabel}
        percentageChange={percentageChange.toFixed(2)}
      />
      <div className="h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </Card>
  );
};

export default StockPriceChart;