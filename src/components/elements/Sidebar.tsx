import { AppleStocksIcon, Bitcoin01Icon, DashboardSquare01Icon, FavouriteIcon } from 'hugeicons-react';
import React from 'react';

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-md">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center">
            N°
          </div>
          <span className="text-xl font-bold">Financial</span>
        </div>
      </div>
      <ul className="menu p-4">
        <li>
          <a href="#dashboard" className="flex items-center space-x-2">
            <span className="icon">
              <DashboardSquare01Icon className="h-6 w-6" />
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="bg-blue-100">
          <a href="#stocks" className="flex items-center space-x-2">
            <span className="icon">
              <AppleStocksIcon className="h-6 w-6" />
            </span>
            <span>Stocks</span>
          </a>
        </li>
        <li>
          <a href="#etfs" className="flex items-center space-x-2">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </span>
            <span>ETFs</span>
          </a>
        </li>
        <li>
          <a href="#crypto" className="flex items-center space-x-2">
            <span className="icon">
              <Bitcoin01Icon className="h-6 w-6" />
            </span>
            <span>Crypto</span>
          </a>
        </li>
        <li>
          <a href="#watchlists" className="flex items-center space-x-2">
            <span className="icon">
              <FavouriteIcon className="h-6 w-6" />
            </span>
            <span>Watchlists</span>
          </a>
        </li>
        <li>
          <a href="#portfolios" className="flex items-center space-x-2">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </span>
            <span>Portfolios</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;