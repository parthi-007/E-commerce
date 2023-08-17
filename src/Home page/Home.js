import React from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Product from "./Product";
import Carts from "./Carts";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Carts/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
