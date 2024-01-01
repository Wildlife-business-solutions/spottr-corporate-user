import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import {
  DASHBOARDHOME,
  PRODUCTPAGE,
} from "../../../../utilities/static/route-const";
import backArrow from "assets/svg/backArrow.svg";
import { Tab, Tabs } from "react-bootstrap";
import ProductContent from "../discover/products/productContent";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentData } from "store/dashboardData/dashboardDataReducer";

function OpportunitiesPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { publishedData, draft } = useSelector((state) => state.dashboardData);

  const redirectToProduct = (data, type) => {
    dispatch(addCurrentData(data));
    history.push({
      pathname: `/dashboard/productpage/${data.categoryId}`,
      search: type,
    });
  };

  return (
    <Div margin="30px 0">
      <SpottrLink to={DASHBOARDHOME}>
        <Div width="100px" display={"flex"}>
          <img src={backArrow} alt="icon" />
          <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
            Go back
          </p>
        </Div>
      </SpottrLink>
      <Tabs defaultActiveKey="publish" className="my-3 w-75">
        <Tab eventKey="publish" title="Publish">
          <Div className="opportunity_cards">
            {publishedData.map((data) => (
              <Div
                width="33%"
                onClick={() => redirectToProduct(data, "publish")}>
                <>
                  <ProductContent item={data} type="publish" />
                </>
              </Div>
            ))}
          </Div>
        </Tab>
        <Tab eventKey="draft" title="Draft">
          <Div className="opportunity_cards">
            {draft?.map((data) => (
              <Div width="33%" onClick={() => redirectToProduct(data, "draft")}>
                <ProductContent item={data} type="draft" />
              </Div>
            ))}
          </Div>
        </Tab>
      </Tabs>
    </Div>
  );
}

export default OpportunitiesPage;
