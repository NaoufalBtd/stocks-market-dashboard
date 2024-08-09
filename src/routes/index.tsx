import { createBrowserRouter, Navigate } from "react-router-dom";

import StocksDashboard from "../components/Containers/StocksDashboard";
import StockDetail from "../components/Containers/StockDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/stocks" />,
  },
  {
    path: "/stocks",
    element: <StocksDashboard />,
  },
  {
    path: "/stocks/:symbol",
    element: <StockDetail />,
  },
]);
