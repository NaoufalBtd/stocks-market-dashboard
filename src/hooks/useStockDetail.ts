import { stocksMetadata } from "../constants/data";

export const useStockDetail = (symbol?: string) => {
  //todo: implement this with real data
  const stockData = stocksMetadata.find((stock) => stock.symbol === symbol);
  if (!stockData) {
    return { isLoading: false, stock: null, error: "Stock not found" };
  }

  return {
    isLoading: false,
    stock: {
      ...stockData,
      score: Math.floor(Math.random() * 100),
      safetyMargin: Math.floor(Math.random() * 100),
      prices: [170, 200, 190, 180, 220, 230, 200],
    },
    error: null,
  };
};
