import React from "react";

interface WatchListModalProps {}

const WatchListModal: React.FC<WatchListModalProps> = () => {
  return (
    <dialog id="watchlist_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Stocks To Your Watchlist</h3>
        <p className="py-4">This Feature did not implemented Yet</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default WatchListModal;
