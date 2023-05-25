import React from "react";
import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">2.45 ETH</span>
        </p>
        <div className="input__item mb-4">
          <input type="number" placeholder="00.00 ETH" />
        </div>
        <div className="input__item mb-4">
          <h6>Enter Quantity, 7 avaliable</h6>
          <input type="number" placeholder="Enter Quantity" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0">You must bid at least</p>
          <span className="money">2.56 ETH</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0">Service Fee</p>
          <span className="money">0.24 ETH</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0">Total Bid Amount</p>
          <span className="money">2.56 ETH</span>
        </div>
        <div className="d-flex justify-content-center">
          <button className="bid__btn">Place a Bid</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
