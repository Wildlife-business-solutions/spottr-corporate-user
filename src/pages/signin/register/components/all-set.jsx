import React, { useEffect, useState } from "react";
import { useRegContext } from "../../../../context/RegContext";
import { LabelText } from "components/onboading/inputField/style";
import InputField from "components/onboading/inputField";
import { LoginText } from "pages/signin/Login/style";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { AlertImg, CautionText, RegText } from "pages/signin/common/style";
import AlertCircle from "assets/svg/alertCircle.svg";
import BrandColors from "GlobalStyles/utils/colors";
import { DescriptionDiv, TitleText } from "components/modals/inputProductModal/style";

export default function AllSet() {

    return (
        <>
            <LoginText>All Set</LoginText>
            <LoginText>Welcome, </LoginText>

            
        </>
    );
}