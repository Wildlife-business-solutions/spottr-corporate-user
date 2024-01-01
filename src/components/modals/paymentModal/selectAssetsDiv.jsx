import React from 'react'
import {Div, Img, ModalSubTitle} from "GlobalStyles/spotrrStyles/style";
import Filters from "pages/dashboard/main/search/Filters";
import Colors from "GlobalStyles/appColors";
import FiatImage from "assets/svg/fiat.svg";
import CliqImage from "assets/svg/cliq.svg";
import SUSDImage from "assets/svg/susd.svg";

export default function SelectAssetsDiv(props) {
    const handleSelectFiat = () => {
        props.setPage(2);
    }
    const handleSelectCliq = () => {
        props.setPage(2);
    }
    const handleSelectSUSD = () => {

    }

    return (
        <Div minHeight="350px">
            <Div display="flex" justify="space-between" margin="0 0 50px 0">
                <ModalSubTitle>Select Assets</ModalSubTitle>
                <Filters
                    options={['USD', 'NGN']}
                    col="transparent"
                    wd="60px"
                    action={(e) => props.setCurrency(e.target.value)}
                />
            </Div>
            <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
                <Img src={FiatImage} h="24px" w="24px" m="0 10px"/>
                <Div display="flex" justify="space-between" width="100%" color={Colors.primary} fw="bold"
                     cursor="pointer" onClick={handleSelectFiat}>
                    <Div>Fiat Wallet</Div>
                    <Div>$456,890</Div>
                </Div>
            </Div>
            <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
                <Img src={CliqImage} h="24px" w="24px" m="0 10px"/>
                <Div display="flex" justify="space-between" width="100%" color={Colors.primary} fw="bold"
                     cursor="pointer" onClick={handleSelectCliq}>
                    <Div>Cliq Token</Div>
                    <Div>$567.78</Div>
                </Div>
            </Div>
            <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
                <Img src={SUSDImage} h="24px" w="24px" m="0 10px"/>
                <Div display="flex" justify="space-between" width="100%" color={Colors.primary} fw="bold"
                     cursor="pointer" onClick={handleSelectSUSD}>
                    <Div>SUSD</Div>
                    <Div>$286</Div>
                </Div>
            </Div>
        </Div>
    );
}
