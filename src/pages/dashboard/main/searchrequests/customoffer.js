import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React, { useState } from "react";

const Customoffer = () => {
    return (
        <Div backgroundColor="#F4F4F4" padding="25px" border="1px solid rgba(154, 159, 191, 0.25)" width="450px" height="320px" margin="25px auto 0 auto" br="22px">
            <SpottrP fw="bold" color="#274b89">Custom offer for this deal</SpottrP>
            <Div color="rgba(59, 59, 59, 0.7)" display="flex" justify="space-between" padding="25px 0 12px 0" bbm="1px solid rgba(0, 0, 0, 0.12)">
                <SpottrP fs="12px">Quantity</SpottrP>
                <SpottrP fw="bold" fs="14px">3</SpottrP>
            </Div>
            <Div color="rgba(59, 59, 59, 0.7)" display="flex" justify="space-between" padding="25px 0 12px 0" bbm="1px solid rgba(0, 0, 0, 0.12)">
                <SpottrP fs="12px">Amount</SpottrP>
                <SpottrP fw="bold" fs="14px">NGN 20,000</SpottrP>
            </Div>
            <Div color="rgba(59, 59, 59, 0.7)" display="flex" justify="space-between" padding="25px 0 12px 0" bbm="1px solid rgba(0, 0, 0, 0.12)">
                <SpottrP fs="12px">Unit</SpottrP>
                <SpottrP fw="bold" fs="14px">NGN 20,000 / kg</SpottrP>
            </Div>
            <Div color="rgba(59, 59, 59, 0.7)" display="flex" justify="space-between" padding="25px 0 12px 0" bbm="1px solid rgba(0, 0, 0, 0.12)">
                <SpottrP fs="12px">Description</SpottrP>
                <SpottrP fw="bold" fs="14px" color="#274b89">See all details</SpottrP>
            </Div>
        </Div>
    )
}

export default Customoffer
