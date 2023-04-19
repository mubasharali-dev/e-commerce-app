import React from "react";
import "./product.css";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";
function Product() {
  return (
    <section className="product">
      <h1 className="product-heading">Products</h1>
      <div className="product-container">
        {product.map((item) => (
          <ProductCart
            key={item.id}
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Product;
