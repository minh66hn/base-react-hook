import React from "react";
import { useState } from "react";

const AddNewProduct = () => {
    const [productName, setProductName]
  return (
    <div>
      <fieldset>
        <legend>Add New Product:</legend>
        <div className="input-product">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="input-product">
          <label>Price</label>
          <input type="text" />
        </div>
        <div className="input-product">
          <label>Size</label>
          <input type="text" />
        </div>
        <div className="input-product">
          <label>Color</label>
          <input type="text" />
        </div>
        <div>
          <button type="button">Submit</button>
        </div>
      </fieldset>
    </div>
  );
};

export default AddNewProduct;
