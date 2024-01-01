import React, { useEffect, useState } from "react";
import { useRegContext } from "../../../../context/RegContext";
import { LabelText } from "components/onboading/inputField/style";
import InputField from "components/onboading/inputField";
import { LoginText } from "pages/signin/Login/style";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { AlertImg, CautionText, RegText } from "pages/signin/common/style";
import AlertCircle from "assets/svg/alertCircle.svg";
import BrandColors from "GlobalStyles/utils/colors";
import GoogleMap from "components/dashboard/main/GoogleMap";

export default function CompanyLocation({ handleFormChange }) {
    const { regData } = useRegContext();

    return (
        <>
            <LoginText>Set Company Location</LoginText>

            <Div width="100%" height="250px" mb="15px">
                  
                  <GoogleMap />
                </Div>

            <br/>

            <LabelText show="block">Or manually input</LabelText>
            <InputField
                value={regData?.form?.companyLocation || ""}
                name="companyLocation"
                show="block"
                handleFormChange={handleFormChange}
                placeholder="Type Location"
                displayEye={"false"}
                required="false"
                noTitle={false}
            />

            
            <Div display="flex" justify="center" margin="20px 0 0 0">
        <RegText>
          <SpottrLink to="/" color={BrandColors.brandColor}>
            {" "}
            Use Live Location{" "}
          </SpottrLink>
        </RegText>
      </Div>
            
            <Div display="flex" justify="center" margin="20px" alignI="flex-start">
                <AlertImg src={AlertCircle} alt="alert-circle" />
                <CautionText>
                Type in your correct name and use a good photo, make sure it is clear
                so that it will increases your chance of getting good gigs :)
                </CautionText>
            </Div>
            <br/>
        </>
    );
}