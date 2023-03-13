import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
const cm = "python .manage.py runserver";

const AllCustomers = () => {
  const backImg = { backgroundImage: "url(./card2.jpg)" };
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCutomers] = useState([]);

  useEffect(() => {
    const req = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/");

      setCutomers(data);
      // console.log(data);
    };
    req();
    // console.log("rendered");
  }, [showModal]);

  const handleModal = (e) => {
    setShowModal(true);
    setSelectedCustomer(e.target.id);
    // console.log(selectedCustomer);
  };

  const renderList = customers.map((customer) => (
    <tr
      key={customer.id}
      className="bg-white border-b dark:bg-gray-800/30 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600/20"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer.username}
      </th>
      <td className="px-6 py-4">{customer.email}</td>
      <td className="px-6 py-4">{customer.money}</td>
      <td className="px-6 py-4">
        <button
          id={customer.id}
          onClick={handleModal}
          className=" bg-blue-700  text-white hover:bg-blue-900 py-2 px-4 rounded-md"
        >
          Transfer
        </button>
      </td>
    </tr>
  ));

  return (
    <div
      style={backImg}
      className="h-[53rem] relative w-full  bg-center bg-no-repeat bg-cover mt-12 md:mt-[4.5rem] before:content-[''] before:bg-gradient-to-br before:from-gray-900/100 before:absolute before:block before:h-full before:w-full"
    >
      {showModal && (
        <Modal
          customers={customers}
          selectedCustomer={selectedCustomer}
          closeModal={setShowModal}
          setCustomers={setCutomers}
        />
      )}
      {/* List of Customers */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[80%] mx-auto top-16 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Tranfer
              </th>
            </tr>
          </thead>
          <tbody>{renderList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCustomers;
