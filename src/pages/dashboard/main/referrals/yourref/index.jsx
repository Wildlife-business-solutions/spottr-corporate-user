import React from 'react'
import { ReferYourEarningsContentBox } from '../style'
import user_referal from "assets/svg/user-referals.svg"
import { Div, Img, SpottrH, SpottrP } from 'GlobalStyles/spotrrStyles/style'
import Colors from 'GlobalStyles/utils/appColors'
function YourRef() {
    return (
        <ReferYourEarningsContentBox>
            <Div display="flex" alignI="center" backgroundColor="" width="80%">
                <Img width="40px" height="40px"src={user_referal} alt="Your Earnings Icons" />
                <Div ml="10px">
                    <SpottrP color={Colors.white}>Adewale Adedamola</SpottrP>
                    <SpottrP color="rgba(255, 255, 255, 0.7)">@adedamola456</SpottrP>
                </Div>
            </Div>
           
                <SpottrH mt="10px" color={Colors.white}>NGN 500</SpottrH>

            
        </ReferYourEarningsContentBox>
    )
}

export default YourRef
