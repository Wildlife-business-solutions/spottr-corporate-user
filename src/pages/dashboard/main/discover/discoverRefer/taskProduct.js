import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { Img } from "GlobalStyles/spotrrStyles/style";
import image from "assets/opImage.png";
import { SpottrP } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/utils/appColors";
import Divider from "GlobalStyles/dividerLine";

const TaskProduct = () => {
  return (
    <Div
      //   border="0.96px solid rgba(154, 159, 191, 0.25)"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
      backgroundColor="#FFF"
      padding="8px"
      width="100%"
      height="auto"
      margin="0px 10px 10px 5px"
      br="5px">
      <Div display="flex" margin="10px 0px  ">
        <Img w="60px" height="70px" br="3px" src={image} alt={image} />
        <Div
          margin="0px 0px 0px 10px"
          width="100%"
          display="flex"
          flexDirection="column">
          <Div>
            <SpottrP fs="13px" fw="bold" color={Colors.darkblue}>
              Multi-Colored Children’s Sportwear
            </SpottrP>
            <Div display="flex" justify="flex-start" alignI="center">
              <Div
                br="3px"
                padding="3px 6px"
                width="35%"
                backgroundColor={Colors.lightGreen}>
                <SpottrP fs="10px" fw="bold">
                  N4,800,000
                </SpottrP>
              </Div>
              <SpottrP fs="9px" ml="5px">
                {" "}
                /day
              </SpottrP>
            </Div>

            <SpottrP fs="10px" color={Colors.darkblue}>
              Coker & Sons Ltd
            </SpottrP>
          </Div>
        </Div>
      </Div>
      <Divider />
      <Div
        width="100%"
        display="flex"
        justify="space-between"
        alignI="center"
        margin="14px 0px 0px 0px">
        <SpottrP fs="10px" fw="bold" color={Colors.ligterGrey}>
          100 left
        </SpottrP>
        <SpottrP fs="10px" fw="bold" color={Colors.ligterGrey}>
          *2min ago
        </SpottrP>
        <SpottrP fs="10px" fw="bold" color={Colors.ligterGrey}>
          Lagos, Nigeria
        </SpottrP>
        <Div display="flex" justify="flex-end" alignI="center">
          <Div br="3px" padding="3px 6px" width="100%">
            <SpottrP fs="11px" fw="bold" color=" #FF4B3E">
              02:33min left
            </SpottrP>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default TaskProduct;
