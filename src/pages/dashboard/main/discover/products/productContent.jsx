import React from "react";
import image from "assets/opImage.png";
import Colors from "GlobalStyles/appColors";
import savedIcon from "assets/sidemenuicons/saved.svg";
import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { useDispatch } from "react-redux";
import { setSavedItem } from "store/savedItem/savedItemReducer";

function ProductContent({ type, item = "", background = "#fff" }) {
  const dispatch = useDispatch();

  const handleSaved = () => {
    dispatch(setSavedItem(item));
  };
  return (
    <Div
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
      backgroundColor={background}
      padding="10px"
      width="auto"
      height="auto"
      margin="0px 10px 14px 5px"
      br="5px"
      cursor="pointer">
      <Div display="flex" gap="10px" width="100%">
        <Div width="auto">
          <Img
            w="70px"
            height="70px"
            br="3px"
            src={!!item ? item.productImages[0] : image}
            alt={image}
          />
        </Div>
        <Div ta="left" width="auto" display="flex" flexDirection="column">
          <Div>
            <SpottrP fs="15px" fw="bold" color={Colors.darkblue}>
              {!!item ? item?.brandName : "10 Baskets of Tomatoes"}
            </SpottrP>
            <SpottrP fs="14px" fw="bold" color={Colors.blue}>
              {!!item ? item?.username : "Food Servicess"}
            </SpottrP>
            <SpottrP fs="12px" color={Colors.darkblue}>
              {!!item ? item?.productName : "Coker & Sons Ltd"}
            </SpottrP>
          </Div>
        </Div>
      </Div>
      <Div
        width="100%"
        display="flex"
        justify="space-between"
        alignI="center"
        margin="15px 0px 0px 0px">
        <SpottrP fs="12px" fw="bold" color={Colors.ligterGrey}>
          Lagos, Nigeria
        </SpottrP>
        <Div display="flex" justify="flex-end" alignI="center">
          <Div
            br="3px"
            padding="5px 10px"
            width="100%"
            backgroundColor={Colors.lightGreen}>
            <SpottrP fs="12px">{!!item ? item?.price : "N4,800,000"}</SpottrP>
          </Div>
          <SpottrP fs="9px" ml="5px">
            {" "}
            /day
          </SpottrP>
        </Div>
      </Div>
    </Div>
  );
}

export default ProductContent;
