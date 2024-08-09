import React from "react";
import Slider from "react-slick";
import TrendCard from "../../elements/TrendCard";

interface indexProps {}

const TrendingStocksCarousel: React.FC<indexProps> = () => {
  // const stocksData = useTrendingStocks();
  const stocksData = {
    trendingStocks: [
      {
        symbol: "AAPL",
        value: 123.45,
        percentageChange: 1.23,
        values: [50, 40, 30, 80, 90, 57],
      },
      {
        symbol: "GOOGL",
        value: 234.56,
        percentageChange: 2.34,
        values: [50, 40, 30, 80, 90, 57],
      },
      {
        symbol: "AMZN",
        value: 345.67,
        percentageChange: 3.45,
        values: [50, 40, 30, 80, 90, 57],
      },
      {
        symbol: "TSLA",
        value: 456.78,
        percentageChange: 4.56,
        values: [50, 40, 30, 80, 90, 57],
      },
      {
        symbol: "MSFT",
        value: 567.89,
        percentageChange: 5.67,
        values: [50, 40, 30, 80, 90, 57],
      },
    ],
    loading: false,
    error: null,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide: true,
    centerMode: true,
    slidesToScroll: 1,
  };

  return (
    <>
      {stocksData.loading ? (
        <p>Loading...</p>
      ) : stocksData.error ? (
        <p>Error: {stocksData.error}</p>
      ) : (
        <Slider {...settings}>
          {stocksData.trendingStocks.map((stock) => (
            <TrendCard
              key={stock.symbol}
              title={stock.symbol}
              value={stock.value.toFixed(2)}
              percentage={stock.percentageChange}
              values={stock.values}
            />
          ))}
        </Slider>
      )}
    </>
  );
};

export default TrendingStocksCarousel;
