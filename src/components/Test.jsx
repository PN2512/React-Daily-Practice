import React from "react";
import "./Test.css";
import { products } from "../data/data";
const Test = () => {
  // console.log(products)
  const productTitle = products.map((product) => product.title);
  console.log(productTitle);
  return (
    <>
      <h1>Product Page </h1>
      {/* {
    productTitle.map(
        (product)=>(<p>{product}</p>)
    )
   }  */}
     <div className="parent-container">
  {products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.description.slice(0, 100)}...
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    );
  })}
</div>
    </>
  );
};

export default Test;
