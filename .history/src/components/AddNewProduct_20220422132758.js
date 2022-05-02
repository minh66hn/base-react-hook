import React from "react";
import { useState } from "react";

const AddNewProduct = () => {
  const [productName, setProductName] = useState("");
  const [producPrice, setProductPrice] = useState(0);
  const [productSize, setProductSize] = useState(0);
  const [productColor, setProductColor] = useState("");
  const [isShowDetail, setIsShowDetail] = useState(true);

  const handleClickbtn = () => {
    alert(`you added new product:${productName}`);
  };
  const handleIsHide = (currentShow) => {
    let isShow = !currentShow;
    setIsShowDetail(isShow);
  };
  return (
    <div>
      {isShowDetail === true && (
        <fieldset>
          <legend>Add New Product:</legend>
          <div className="input-product">
            <label>Name</label>
            <input
              value={productName}
              type="text"
              onChange={(event) => {
                setProductName(event.target.value);
              }}
            />
          </div>
          <div className="input-product">
            <label>Price</label>
            <input
              value={producPrice}
              type="text"
              onChange={(event) => {
                setProductPrice(event.target.value);
              }}
            />
          </div>
          <div className="input-product">
            <label>Size</label>
            <input value={productSize} type="text" />
          </div>
          <div className="input-product">
            <label>Color</label>
            <input
              value={productColor}
              type="text"
              onChange={(event) => {
                setProductColor(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="button" onClick={() => handleClickbtn()}>
              Submit
            </button>
          </div>
        </fieldset>
      )}

      {isShowDetail === true ? 
        <div
          onClick={() => {
            handleIsHide(true);
          }}
        >
          Is hide Add product
        </div>
      ) : 
        <div
          onClick={() => {
            handleIsHide(false);
          }}
        >
          Show the Add product
        </div>
      }
    </div>
  );
};

export default AddNewProduct;
