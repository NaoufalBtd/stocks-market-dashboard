import React from 'react';
import Card from '../../elements/Card';

interface StockProfileProps {
  country?: string;
  industry?: string;
  about?: string;
  className?: string;
}

const StockProfile: React.FC<StockProfileProps> = ({
  country,
  industry,
  about,
  className
}) => {
  return (
    <div className={className}>
      <Card title="Profile">
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-gray-500">Country</span>
            <div className="ml-auto flex items-center space-x-2">
              <img src="/usa-flag.png" alt="US Flag" className="w-5 h-5" />
              <span>{country}</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500">Industry</span>
            <div className="ml-auto">
              <span className="badge badge-secondary">{industry}</span>
            </div>
          </div>
          <div className="text-gray-700 mt-4">
            <span className="font-bold">About</span>
            <p className="mt-1">
              {about}
              <a href="#" className="text-blue-500">
                Read more
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StockProfile;