import React from "react";
import AnalysisHeader from "../../search/Search";
import { Div, SpottrP, Button } from "GlobalStyles/spotrrStyles/style";
import BarGraph from "components/dashboard/main/graph/barchart";
import {
  MProfileDetails,
  BarchartArea,
  MetricsArea,
  StatsArea,
  StatDiv,
} from "../style";
import Metrics from "./metrics";
import Highlights from "./highlights";
import backArrow from "assets/svg/backArrow.svg";
import { useHistory } from "react-router-dom";
import "./index.css";

const DashboardAnalysis = () => {
  const history = useHistory();

  return (
    <Div>
      <AnalysisHeader searchheader="Dashboard Analysis" />
      <Div width="100px" display={"flex"}>
        <img src={backArrow} alt="icon" />
        <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
          Go back
        </p>
      </Div>
      <Div backgroundColor="#fff" width="819px" margin="15px 0">
        <Div
          display="flex"
          alignI="center"
          justify="space-between"
          padding="0 35px"
          height="181px"
          style={{
            backgroundImage:
              "linear-gradient(hsla(218, 56%, 35%, 1), hsla(218, 78%, 24%, 1))",
          }}>
          <Div>
            <div>
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.9959 5.24861H3.58156L7.72364 1.10653L6.6171 0L0.585938 6.03117L6.6171 12.0623L7.72364 10.9558L3.58156 6.81372H14.9959V5.24861Z"
                  fill="#white"
                />
              </svg>
            </div>
            <SpottrP fs="27px" fw="bold" color="#fff">
              Overview
              <br /> Dashboard
            </SpottrP>
          </Div>

          <Button
            style={{ alignSelf: "flex-end" }}
            m="0 0 25px 0"
            p="10px 25px"
            br="100px"
            fw="400"
            color="#39B54A">
            Create an ad
          </Button>
        </Div>
        <Div padding="25px 55px 0 55px">
          <Div width="350px">
            <SpottrP color="#274B89" fs="14px" fw="bold">
              Your Performance
            </SpottrP>
            <Div
              color="rgba(59, 59, 59, 0.7)"
              fs="14px"
              padding="10px 0 20px 0">
              You reached 450 accounts in the month of March, compare to
              February
            </Div>
          </Div>
          <BarchartArea>
            <BarGraph w={750} h={270} />
          </BarchartArea>
          <Div bbm="1px solid #E7E7E7" padding="27px 0 0 0"></Div>
          <Div
            display="flex"
            justify="space-between"
            alignI="flex-start"
            padding="20px 0 60px 0">
            <MProfileDetails width="300px">
              <MetricsArea>
                <h6>Top Performance Metrics</h6>
                <h4>Stats compare to previous month</h4>
                <StatsArea>
                  <StatDiv>
                    <Metrics text="Search" />
                    <Metrics text="Visits" number={38} percent="40%" />
                  </StatDiv>
                  <StatDiv>
                    <Metrics text="Contact" number={2} percent="87%" />
                    <Metrics text="Request" number={10} percent="78%" />
                  </StatDiv>
                </StatsArea>
              </MetricsArea>
            </MProfileDetails>
            <MProfileDetails width="300px">
              <Highlights />
              <Highlights title="ads" />
            </MProfileDetails>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default DashboardAnalysis;
