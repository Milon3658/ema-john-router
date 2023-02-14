import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="prod-details">
      <img className="prod-details-img" src={product.img} alt="" />
      <div>
        <h1>Name : {product.name}</h1>
        <br />
        <h4> Price : {product.price}</h4>
        <br />
        <p>Quantity : {product.quantity}</p>
        <br />
        <p>Product Details : {product.details}</p>
        <br />
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
