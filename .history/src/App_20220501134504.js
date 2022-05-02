import React from "react";

import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <img src={logo} className="App-logo" alt="logo" />
        <Home></Home>
      </header>
      <div className="content-right">
        <AddNewProduct />
        <Product\>
      </div>
    </div>
  );
}

export default App;
