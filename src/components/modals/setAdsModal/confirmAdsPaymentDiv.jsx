import React from "react";
import {Button, Div, SpottrP} from "GlobalStyles/spotrrStyles/style";
import {Img} from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/appColors";
import CliqImage from "assets/svg/cliq.svg";
import ProductImage from "assets/opImage.png"
import {ModalSubTitle} from "GlobalStyles/spotrrStyles/style";

export default function ConfirmAdsPaymentDiv(props) {
    return (
        <Div minHeight="400px">
            <Div display="flex" justify="space-between">
                <ModalSubTitle>Confirm Ads Payment</ModalSubTitle>
                <Button fs="12px" fw="bold" color={Colors.primary} bc={Colors.white} onClick={props.handleCancel}>Cancel</Button>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <h4 style={{color: Colors.grey}}>Total Cost</h4>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <h1 style={{color: Colors.primary}}>N{(props.budget * props.days).toLocaleString()}</h1>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <Img src={CliqImage} m="0 10px"/>
                <h4 style={{color: Colors.primary}}>{(27.7).toLocaleString(undefined, {minimumFractionDigits: 2})} coins</h4>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <SpottrP color={Colors.grey} fs="12px" tAlign="center" m="30px">
                    Payment is completed after 2 way confirmation is done by the merchant and the user. You will be
                    charge 3.5% as service charge
                </SpottrP>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <SpottrP color={Colors.grey} fs="14px" tAlign="center" m="10px">
                    Start:
                </SpottrP>
                <SpottrP color={Colors.primary} fs="14px" fw="bold" tAlign="center" m="10px">
                    23rd Jan, 2022
                </SpottrP>
            </Div>
            <Div display="flex" justify="center" alignI="center">
                <SpottrP color={Colors.grey} fs="14px" tAlign="center" m="5px 10px">
                    End:
                </SpottrP>
                <SpottrP color={Colors.primary} fs="14px" fw="bold" tAlign="center" m="5px 10px">
                    27th Jan, 2022
                </SpottrP>
            </Div>
            <Div display="flex" justify="center" alignI="center" margin="50px">
                <Img src={ProductImage} br="10px" w="50px" h="50px"/>
                <Button color={Colors.primary} bc={Colors.white} fs="14px" fw="bold" tAlign="center" m="5px 10px">
                    Preview your ads
                </Button>
            </Div>
        </Div>
    );
}