import React from "react";
import Slider from "../../components/hero/Slider";
import Order from "../../components/hero/Order";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
function Home() {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  );
}

export default Home;
