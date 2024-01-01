import React from "react";
import image from "assets/opImage.png";
import Colors from "GlobalStyles/appColors";
import savedIcon from "assets/sidemenuicons/saved.svg";
import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { useDispatch } from "react-redux";
import { setSavedItem } from "store/savedItem/savedItemReducer";

function ProductItemMenu({ item = "", background = "#fff" }) {
  const dispatch = useDispatch();
  const handleSaved = () => {
    dispatch(setSavedItem(item));
  };
  return (
    <Div
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
      backgroundColor={background}
      padding="10px"
      width="316px"
      height="auto"
      margin="0px 10px 20px 5px"
      br="5px"
      cursor="pointer">
      <Div display="flex">
        <Img
          w="70px"
          height="70px"
          br="3px"
          src={!!item ? item.displayImage : image}
          alt={image}
        />
        <Div
          ta="left"
          margin="0px 0px 0px 10px"
          width="100%"
          display="flex"
          flexDirection="column">
          <Div>
            <SpottrP
              className="m-0"
              fs="15px"
              fw="bold"
              color={Colors.darkblue}>
              10 Baskets of Tomatoes
            </SpottrP>
            <SpottrP className="m-0" fs="14px" fw="bold" color={Colors.blue}>
              {`${!!item && item.name} Service`}
            </SpottrP>
            <SpottrP className="m-0" fs="12px" color={Colors.darkblue}>
              Coker & Sons Ltd
            </SpottrP>
          </Div>
          <Div
            width="100%"
            display="flex"
            justify="space-between"
            alignI="center"
            margin="15px 0px 0px 0px">
            <SpottrP
              className="m-0"
              fs="12px"
              fw="bold"
              color={Colors.ligterGrey}>
              Lagos, Nigeria
            </SpottrP>
            {!!item && (
              <Div>
                <Img
                  onClick={handleSaved}
                  width={"24px"}
                  height="24px"
                  br="3px"
                  src={savedIcon}
                  alt={savedIcon}
                />
              </Div>
            )}
            <Div display="flex" justify="flex-end" alignI="center">
              <Div
                br="3px"
                padding="5px 10px"
                width="100%"
                backgroundColor={Colors.lightGreen}>
                <SpottrP fs="12px">N4,800,000</SpottrP>
              </Div>
              <SpottrP fs="9px" ml="5px">
                {" "}
                /day
              </SpottrP>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default ProductItemMenu;
