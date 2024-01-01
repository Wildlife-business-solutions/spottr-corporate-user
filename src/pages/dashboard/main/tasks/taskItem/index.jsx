import { Div } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import ProductItem from "./productItem";

function Productsopportunities() {
  return (
    <Div display="flex" wrap="wrap">
      {[...new Array(12)].map((product, i)=> <ProductItem key={i}/>)}
    </Div>
  );
}

export default Productsopportunities;