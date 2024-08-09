import axios from "axios";
import { API_KEY, BASE_URL } from "../constants";
import { StockMetadata } from "../types";

export const fetchDailyTimeSeries = async (symbol: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol: symbol,
      apikey: API_KEY,
    },
  });
  return response.data["Time Series (Daily)"];
};

export const calculatePercentageChange = (oldPrice: number, newPrice: number) => {
  return ((newPrice - oldPrice) / oldPrice) * 100;
};


export const getTrendingStocks = async (symbols: string[], days: number) => {
  const trendingStocks = [];

  for (const symbol of symbols) {
    try {
      const timeSeries = await fetchDailyTimeSeries(symbol);
      if(!timeSeries) {
        console.error(`No data found for symbol ${symbol}`);
        continue;
      }
      const dates = Object.keys(timeSeries).slice(0, days);

      if (dates.length < days) {
        continue;
      }

      const firstDate = dates[dates.length - 1];
      const lastDate = dates[0];

      const firstPrice = parseFloat(timeSeries[firstDate]["4. close"]);
      const lastPrice = parseFloat(timeSeries[lastDate]["4. close"]);

      const percentageChange = calculatePercentageChange(firstPrice, lastPrice);

      trendingStocks.push({
        symbol: symbol,
        percentageChange: percentageChange,
        value: lastPrice,
        values: dates.map((date) => parseFloat(timeSeries[date]["4. close"])),
      });
    } catch (error) {
      console.error(`Error fetching data for symbol ${symbol}:`, error);
    }
  }

  trendingStocks.sort((a, b) => b.percentageChange - a.percentageChange);

  return trendingStocks;
};

export const getStockOverview = async (stock: StockMetadata) => {
  const { symbol } = stock;
  const timeSeries = await fetchDailyTimeSeries(symbol);
  if (!timeSeries) {
    throw new Error(`No data found for symbol ${symbol}`);
  }

  const dates = Object.keys(timeSeries).slice(0, 7);

  const lastDate = dates[0];
  const firstDate = dates[dates.length - 1];

  const firstPrice = parseFloat(timeSeries[firstDate]["4. close"]);
  const lastPrice = parseFloat(timeSeries[lastDate]["4. close"]);

  const percentageChange = calculatePercentageChange(firstPrice, lastPrice);

  return {
    ...stock,
    percentageChange: percentageChange,
    value: lastPrice,
  };
};