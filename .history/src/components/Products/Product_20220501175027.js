import React from "react";
import "../Products/Product.scss";
import {snicker1} from "../../../assets/images";
const Product = () => {
  return (
    <div className="products-container">
      <div className="content-left">
        <div className="img-up">
          <img src={snicker1} />
        </div>
        <div className="img-down"></div>
      </div>
      <div className="content-right">
        <div className="title">
          Giày Thể Thao Nam Biti’s Hunter X Z Collection InGreenZ
        </div>
        <div className="price">1.207.000 ₫</div>
        <div className="size">size: 40</div>
        <label>Số lượng</label>
        <div className="action">
          <input type="number" className="quantity" min={1} />
          <button className="buy">Chọn mua</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
