import React from "react";
// import Slider from "react-slick";
import Slider from "../../components/hero/Slider";
import Order from "../../components/hero/Order";
import Category from "../../components/category/Category";
function Home() {
  return (
    <>
      <Slider />
      <Order />
      <Category />
    </>
  );
}

export default Home;
