import React from 'react'
import { Button, Div, Img, SpottrH, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { AddsCard } from "../trending/style";
import closeBtn from "assets/svg/closeBtn.svg";
import Colors from "GlobalStyles/utils/appColors";

const Ads = ({action}) => {
    return (
        <AddsCard>
            <Div display="flex" justify="space-between" alignI="center">
                <SpottrP fw="bold" fs="14px" color={Colors.primary}>
                    Drive traffic to your website
                </SpottrP>
                <Div cursor="pointer" onClick={() => action(false)}>
                    <Img width="15px" height="12px" src={closeBtn} alt="Close Button" />
                </Div>
            </Div>
            <SpottrP color={Colors.ligterGrey} fs="13px" p="6px 0">
                Get real visitors and increase leads
            </SpottrP>
            <SpottrP color="#AAB4C3" fs="12px" m="8px 0">Leadengine.com</SpottrP>
            <Div bbm="1px solid #e7e7e7"></Div>
            <Div display="flex" justify="space-between" margin="10px 0 0 0">
                <Div width="30px" height="25px" backgroundColor={Colors.green} display="flex" justify="center" alignI="center" br="3px">
                    <SpottrH fs="12px" fw="bold" color={Colors.white}>AD</SpottrH>
                </Div>
                <Button color={Colors.white} bc={Colors.primary} fs="10px" fw="bold" p="5px 10px" br="3px">View Ad</Button>
            </Div>
        </AddsCard>
    )
}

export default Ads
