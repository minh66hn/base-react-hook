import React from "react";
import { useState } from "react";

const AddNewProduct = () => {
  const [productName, setProductName] = useState("");
  const [producPrice, setProducPrice] = useState(0);
  const [productSize, setProductSize] = useState(0);
  const [productColor, setProductColor] = useState("");
  return (
    <div>
      <fieldset>
        <legend>Add New Product:</legend>
        <div className="input-product">
          <label>Name</label>
          <input value={productName} type="text" onChange={(event)=>{
              setProductName(event.target.value)
          }} />
        </div>
        <div className="input-product">
          <label>Price</label>
          <input value={producPrice} type="text" onChange={(event)=>{
              setProductPrice(event.target.value)
          }} />
        </div>
        <div className="input-product">
          <label>Size</label>
          <input value={productSize} type="text" />
        </div>
        <div className="input-product">
          <label>Color</label>
          <input value={productColor} type="text" />
        </div>
        <div>
          <button type="button">Submit</button>
        </div>
      </fieldset>
    </div>
  );
};

export default AddNewProduct;
