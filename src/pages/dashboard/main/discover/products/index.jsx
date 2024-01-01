import { Div } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import { trendingCards } from "utilities/constant/dummyCards";
import ProductContent from "./productContent";
import { useHistory } from "react-router-dom";
import { addCurrentData } from "store/dashboardData/dashboardDataReducer";
import { useDispatch } from "react-redux";

function TrendingProducts() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRedirectProduct = (data) => {
    dispatch(addCurrentData(data));
    history.push({
      key: "ac3df4", // not with HashHistory!
      pathname: `/dashboard/productpage/${data.categoryId}`,
      search: "?product",
    });
  };
  return (
    <Div>
      {trendingCards.map((product, i) => (
        <div onClick={() => handleRedirectProduct(product)}>
          <ProductContent key={i} />
        </div>
      ))}
    </Div>
  );
}

export default TrendingProducts;
