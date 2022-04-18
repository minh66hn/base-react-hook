import React from "react";

const AddNewProduct = () => {
  return (
    <div>
    <fieldset></fieldset>
      Add New Product:
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
    </div>
  );
};

export default AddNewProduct;
