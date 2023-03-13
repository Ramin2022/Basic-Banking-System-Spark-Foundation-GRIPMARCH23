import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import AllCustomers from "./Components/AllCustomers";
import TransactionHistory from "./Components/TransactionHistory";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/allcustomers" element={<AllCustomers />}></Route>
          <Route path="/transaction" element={<TransactionHistory />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
