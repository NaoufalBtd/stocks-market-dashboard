import { stocksMetadata } from "../constants/data";

export const getCardChartData = (
  data: number[],
  options: {
    randomColor?: boolean;
  }
) => {
  let borderColor = "rgba(34, 197, 94, 1)";
  let backgroundColor = "rgba(34, 197, 94, 0.2)";

  if (options?.randomColor) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    borderColor = `#${randomColor}`;
    backgroundColor = `#${randomColor}33`;
  }
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data,
        borderColor: borderColor, //todo create this color in a dynamic way
        backgroundColor: backgroundColor,
        fill: true,
      },
    ],
  };
};

//todo: rename this function
export const getFilteredSuggestions = (search: string) => {
  if (search) {
    return stocksMetadata
      .filter(
        (stock) =>
          stock.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          stock.symbol.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
      .map((stock) => stock.symbol)
      .slice(0, 5);
  } else {
    return [];
  }
};

//todo: change the the type of the parameter from string to enum
export const generateChartLabelsByTimeIntervals = (timeInterval: string) => {
  const today = new Date();

  switch (timeInterval) {
    case "1d":
      return ["9:30", "10:30", "11:30", "12:30", "1:30", "2:30", "3:30"];
    case "1w": {
      /// last 7 days
      const last7Days = new Array(7)
        .fill(0)
        .map((_, index) => {
          const date = new Date(today);
          date.setDate(today.getDate() - index);
          return date;
        })
        .reverse();
      return last7Days.map((date) => date.toLocaleDateString());
    }
    case "1m": {
      const last30Days = new Array(30)
        .fill(0)
        .map((_, index) => {
          const date = new Date(today);
          date.setDate(today.getDate() - index);
          return date;
        })
        .reverse();
      return last30Days.map((date) => date.toLocaleDateString());
    }
    default: {
      const last12Months = new Array(12)
        .fill(0)
        .map((_, index) => {
          const date = new Date(today);
          date.setMonth(today.getMonth() - index);
          return date;
        })
        .reverse();
      return last12Months.map((date) => date.toLocaleDateString());
    }
  }
};

export const generateTimeIntervalLabel = (timeInterval: string) => {
  switch (timeInterval) {
    case "1d": {
      const today = new Date();
      return new Date(today).toLocaleDateString();
    }
    case "1w": {
      const today = new Date();
      const last7Days = new Date(today);
      last7Days.setDate(today.getDate() - 7);
      return `${last7Days.toLocaleDateString()} - ${today.toLocaleDateString()}`;
    }
    case "1m": {
      const today = new Date();
      const last30Days = new Date(today);
      last30Days.setDate(today.getDate() - 30);
      return `${last30Days.toLocaleDateString()} - ${today.toLocaleDateString()}`;
    }
    default: {
      const today = new Date();
      const last12Months = new Date(today);
      last12Months.setMonth(today.getMonth() - 12);
      return `${last12Months.toLocaleDateString()} - ${today.toLocaleDateString()}`;
    }
  }
};
