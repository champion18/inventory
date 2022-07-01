import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import ProductList from "./component/Home/ProductList";
import NewProduct from "./component/Home/newProduct";
import UpdateProduct from "./component/Home/UpdateProduct";
import NewCat from "./component/Home/newCat";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/new" element={<NewProduct />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
        <Route path="/category/new" element={<NewCat />} />
      </Routes>
    </Router>
  );
}

export default App;
