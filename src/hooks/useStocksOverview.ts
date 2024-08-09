import { useState, useEffect } from "react";
import { stocksMetadata } from "../constants/data";
import { getStockOverview } from "../utils/stocksUtils";
import type { UnwrapPromise } from "../types/utils";

export const useStocksOverview = () => {
  const [stocksOverview, setStocksOverview] = useState<
    UnwrapPromise<ReturnType<typeof getStockOverview>>[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchStocksOverview = async () => {
      try {
        const stocksDataPromise = stocksMetadata.map((stock) =>
          getStockOverview(stock)
        );
        const stocksData = await Promise.all(stocksDataPromise);

        if (!signal.aborted) {
          setStocksOverview(stocksData);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError("Failed to fetch stocks overview.");
          console.error("Error fetching stocks overview:", error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchStocksOverview();

    return () => {
      controller.abort();
    };
  }, []);

  return { stocksOverview, loading, error };
};
