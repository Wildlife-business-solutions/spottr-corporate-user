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

export default function DescribeCompany({ handleFormChange }) {
    const { regData } = useRegContext();

    return (
        <>
            <LoginText>Describe your company</LoginText>

            <DescriptionDiv style={{ marginTop: "10px" }}>
        <div className="d-flex">
        
        <LabelText show="block">What does your company do?</LabelText>
          <p>0/500</p>
        </div>
        <textarea
          style={{ padding: "10px", height: "200px" }}
          value={regData?.form?.companyDescription || ""}
          placeholder="Write Something...."
        />
        
      </DescriptionDiv>

            
      <LabelText show="block" style={{ marginTop: "20px" }}>Service/product Category?</LabelText>
        <InputField
            show="block"
            handleFormChange={handleFormChange}
            placeholder="Food Items"
            displayEye={"false"}
            required="false"
            noTitle={false}
        />
            
      <LabelText show="block" style={{ marginTop: "10px" }}>Add other tags</LabelText>
        <InputField
            show="block"
            handleFormChange={handleFormChange}
            placeholder="Food stuffs, Food Items"
            displayEye={"false"}
            required="false"
            noTitle={false}
        />

<LabelText show="block" style={{ marginTop: "10px" }}>Adding tags improve search awareness for users</LabelText>

            
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