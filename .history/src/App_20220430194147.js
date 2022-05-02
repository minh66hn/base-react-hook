import React from "react";

import logo from "./logo.svg";
import "App.sass";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <img src={logo} className="App-logo" alt="logo" />
        <Home></Home>
      </header>
      <div className="content-right">
        <AddNewProduct />
      </div>
    </div>
  );
}

export default App;
