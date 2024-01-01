import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import image from "assets/svg/userIcon.svg";
import Colors from "GlobalStyles/utils/appColors";
import seller from "assets/svg/userIcon.svg";
import circle from "assets/svg/backgroundcircle.svg";

const Singleproduct = () => {
    return (
        <Div
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
            backgroundColor="#FFF"
            padding="8px 26px"
            width="75%"
            br="5px"
        >
            <Div display="flex" alignI="center" justify="space-between">
                <Div display="flex" alignI="center">
                    <Img w="50px" height="50px" br="3px" src={circle} alt={image} />
                    <SpottrP fs="16px" fw="bold" color={Colors.darkblue} p="0 0 0 10px">
                        Camry
                    </SpottrP>
                </Div>

                <Div margin="-20px 0 0 0">
                    <Img w="50px" height="50px" br="3px" src={seller} alt={image} />
                    <SpottrP fs="11px" fw="bold" color={Colors.darkblue}>
                        Godstime John
                    </SpottrP>
                </Div>

            </Div>

            <Div bbm="1px solid #E7E7E7" padding="13px 0 0 0"></Div>

            <Div
                display="flex"
                justify="space-between"
                alignI="center"
                padding="8px 0"
            >
                <Div display="flex" justify="space-between" width="180px" alignI="center" fs="10px">
                    <SpottrP fw="bold" color={Colors.ligterGrey}>Lagos, Nigeria</SpottrP>
                    <SpottrP fw="bold" color={Colors.ligterGrey}>10 Aug 2021</SpottrP>
                    <SpottrP fw="bold" color={Colors.ligterGrey}>04:00PM</SpottrP>
                </Div>
                <Div
                    br="3px"
                    padding="3px 6px"
                    // width="100%"
                    backgroundColor={Colors.Green}
                >
                    <SpottrP fs="10px" fw="bold" color="#39B54A">Accepted</SpottrP>
                </Div>
            </Div>
        </Div>
    )
}

export default Singleproduct

