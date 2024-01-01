import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { SpottrP } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/appColors";
import { Img } from "GlobalStyles/spotrrStyles/style";
import SingleTaskItem from "../../tasks/taskItem/singleTask";

const AllFilledDetails = ({ data }) => {
  return (
    <>
      <Div>
        <Div
          backgroundColor="#ffffff"
          display="flex"
          justify-content="center"
          alignI="center">
          <Div
            ta="left"
            zIndex="9"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
            backgroundColor="#ffffff"
            width="100%"
            height="auto"
            margin="10px 0px"
            br="5px">
            <SingleTaskItem data={data} title={data.taskTitle} />
          </Div>
        </Div>
        <Div ta="left">
          <Div margin="20px 0px 35px 0px">
            <SpottrP color="#FF4B3E" fw="700" fs="50px">
              02:33mins left
            </SpottrP>
          </Div>
          <Div>
            <SpottrP color="rgba(0, 0, 0, 0.7)" fw="700" fs="20px">
              Instructions:
            </SpottrP>
            <SpottrP fs="20px" color={Colors.grey} m="35px 0">
              <> {data?.description}</>
            </SpottrP>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default AllFilledDetails;
