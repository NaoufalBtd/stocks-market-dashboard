import React from "react";

interface indexProps {}

const Header: React.FC<indexProps> = () => {
  return (
    <header className="flex justify-between items-center p-4  ">
      <div className="flex items-center space-x-4">
        <button className="btn btn-ghost btn-circle bg-white shadow-md">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center">
            N°
          </div>
          <div>
            <h1 className="text-lg font-bold">Financial</h1>
            <span className="text-sm text-gray-500">Dashboard</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src="/profile.png" alt="User" className="rounded-full h-8 w-8" />
          <div>
            <h2 className="text-sm font-medium">Naoufal Boutadarhart</h2>
            <span className="text-xs text-gray-500">CEO Assistant</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <label className="input flex items-center bg-inherit gap-2">
            <div className="icon p-2 rounded-full border-white border-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Start searching here..."
              className=" w-full max-w-xs"
            />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
