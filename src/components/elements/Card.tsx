import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card bg-base-50 shadow-md">
      <div className="card-body">
        <div className="text-base-500 text-lg">{title}</div>
        <div className="divider my-0"></div>
        {children}
      </div>
    </div>
  );
};

export default Card;
