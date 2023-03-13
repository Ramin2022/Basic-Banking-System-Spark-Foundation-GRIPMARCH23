import axios from "axios";
import React, { useEffect, useState } from "react";

const TransactionHistory = () => {
  const backImg = { backgroundImage: "url(./card2.jpg)" };
  const [history, setHistory] = useState([]);
  const url = "http://127.0.0.1:8000/money/";
  useEffect(() => {
    const req = async () => {
      const { data } = await axios.get(url);

      setHistory(data);
      // console.log(data);
    };
    req();
  });

  const renderList = history.map((customer) => (
    <tr
      key={customer.id}
      className="bg-white border-b dark:bg-gray-800/30 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer.sender_user}
      </th>
      <td className="px-6 py-4">{customer.receiver_user}</td>
      <td className="px-6 py-4">{customer.money}</td>
    </tr>
  ));

  return (
    <div
      style={backImg}
      className="h-[88.6vh] relative w-full  bg-center bg-no-repeat bg-cover mt-12 md:mt-[4.5rem] before:content-[''] before:bg-gradient-to-br before:from-gray-900/100 before:absolute before:block before:h-full before:w-full"
    >
      {/* List of Customers */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[80%] mx-auto top-16 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                To
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>{renderList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
