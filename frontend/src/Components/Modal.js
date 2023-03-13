import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Modal = ({ closeModal, selectedCustomer, customers, setCustomers }) => {
  const POSTS_URL = "http://127.0.0.1:8000/";

  const [customerId, setCustomerId] = useState(0);
  const [amount, setAmount] = useState(0);
  // console.log(selectedCustomer);

  const transferMoney = (e) => {
    e.preventDefault();
    closeModal(false);

    axios.post(POSTS_URL, {
      selected_user_id: selectedCustomer,
      money: amount,
      transfer_user_id: customerId,
    });

    // console.log(customerId);
    // console.log(amount);
    // console.log(selectedCustomer);
  };

  const renderedOptions = customers.map((customer) => (
    <option key={customer.id} id={customer.id}>
      {customer.username}
    </option>
  ));

  const onCustomerChange = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const optionId = el.getAttribute("id");
    setCustomerId(Number(optionId));
    console.log(optionId);
  };

  return ReactDOM.createPortal(
    <div
      onClick={() => closeModal(false)}
      className="bg-white/25 fixed z-[70] top-0 left-0 h-full w-full"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[40%] w-[45%]  absolute rounded py-4  left-[50%] top-2 translate-x-[-50%]   bg-white"
      >
        <form
          className="h-full flex flex-col justify-between p-4"
          onSubmit={transferMoney}
        >
          <div className="flex flex-col">
            <label htmlFor="customerlist">Transfer to:</label>
            <select
              id="customerlist"
              name="customerlist"
              onChange={onCustomerChange}
              className="md:w-full border rounded-md p-2 focus:outline-none border-black/50"
            >
              <option>...</option>
              {renderedOptions}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount:</label>
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              type="number"
              min="0"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              className="border px-1 border-black/50 h-8 rounded focus:outline-none"
            />
          </div>
          <div className="">
            <button
              id="1313"
              type="submit"
              className=" bg-blue-700  mt-3 text-white hover:bg-blue-900 py-2 px-4 rounded-md"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
