import React from "react";
import Card from "../../elements/Card";

interface StockScoreProps {
  score?: number;
  marginOfSafety?: number;
}

const StockScore: React.FC<StockScoreProps> = ({ score, marginOfSafety }) => {
  return (
    <Card title="Stock Score">
      <div className="flex justify-center">
        <div className="hexagon w-24 h-24  p-1 bg-slate-800 flex justify-center items-center">
          <div className="hexagon w-20 h-20 bg-base-100 ">
            <div className="flex justify-center items-center h-full">
              <span className="font-bold text-2xl">{score}</span>/100
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-2 text-sm">
        This stock has a score of {score}/100 and an Margin of Safety of{" "}
        {marginOfSafety}%
      </p>
    </Card>
  );
};

export default StockScore;
