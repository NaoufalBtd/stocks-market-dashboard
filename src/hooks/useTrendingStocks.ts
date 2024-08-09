import { useEffect, useState } from "react";
import { getTrendingStocks } from "../utils/stocksUtils";
import { bestKnownStockSymbols } from "../constants/data";
import { UnwrapPromise } from "../types/utils";

export const useTrendingStocks = () => {
  const [trendingStocks, setTrendingStocks] = useState<
    UnwrapPromise<ReturnType<typeof getTrendingStocks>>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTrendingStocks = async () => {
      try {
        const trendingStocks = await getTrendingStocks(
          bestKnownStockSymbols,
          7
        );
        if (!signal.aborted) {
          setTrendingStocks(trendingStocks);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError("Failed to fetch trending stocks.");
          console.error("Error fetching trending stocks:", error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchTrendingStocks();

    return () => {
      controller.abort();
    };
  }, []);

  console.log(trendingStocks);
  return { trendingStocks, loading, error };
};
