import { ArrowLeft01Icon } from 'hugeicons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface StockDetailsHeaderProps {
  stockName?: string;
  stockSymbol?: string;
}

const StockDetailsHeader: React.FC<StockDetailsHeaderProps> = ({stockName, stockSymbol}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-2 space-x-4">
      <div className="flex items-center space-x-2">
        <button className="btn btn-sm btn-ghost" onClick={() => navigate('/stocks')}>
          <ArrowLeft01Icon className="h-6 w-6" />
        </button>
        <div>
          <p className="text-lg font-bold">{stockName}</p>
          <p className="text-sm text-gray-500">{stockSymbol}</p>
        </div>
      </div>
      <div className="ml-auto flex space-x-2">
        <button className="btn btn-outline btn-sm">Set an alert</button>
        <button className="btn btn-outline btn-sm">4M Analysis</button>
        <button className="btn btn-sm btn-secondary">Add to watchlist</button>
      </div>
    </div>
  );
};

export default StockDetailsHeader;