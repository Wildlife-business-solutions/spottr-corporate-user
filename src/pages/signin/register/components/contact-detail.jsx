import React, { useEffect, useState } from "react";
import { useRegContext } from "../../../../context/RegContext";

import InputField from "../../../../components/onboading/inputField";
import AvatarUpload from "../../../../components/global/AvatarUpload";
import { LabelText } from "../../../../components/onboading/inputField/style";
import { AlertImg, CautionText } from "../../common/style";
import { Div, SpottrLink } from "../../../../GlobalStyles/spotrrStyles/style";
import AlertCircle from "assets/svg/alertCircle.svg";
import BrandColors from "../../../../GlobalStyles/utils/colors";

export default function ContactDetails({ handleFormChange }) {
  const { regData } = useRegContext();
  const [photoUrl, setPhotoUrl] = useState("");

  const handleFile = () => {
    const fileInput = document.getElementById("uploadFile");
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = function () {
      setPhotoUrl(reader.result);
    };
  };

  useEffect(() => {
    if (photoUrl) {
    }
  }, [photoUrl]);

  return (
    <>
      <Div
        width="100%"
        display="flex"
        justify="flex-end"
        style={{ position: "relative", bottom: "70px" }}>
        <SpottrLink to="/dashboard" color={BrandColors.brandBlue}>
          I'll do this later
        </SpottrLink>
      </Div>
      <AvatarUpload photoUrl={photoUrl} handleFile={handleFile} />
      <LabelText show="block">Company Details</LabelText>
      <InputField
        value={regData?.form?.brandName || ""}
        name="brandName"
        show="block"
        handleFormChange={handleFormChange}
        placeholder="Brand Name"
        displayEye={"false"}
        required="true"
        noTitle={false}
      />
      <InputField
        value={regData?.form?.contactEmail || ""}
        name="contactEmail"
        show="block"
        handleFormChange={handleFormChange}
        placeholder="Contact Email"
        displayEye={"false"}
        required="true"
        noTitle={false}
      />
      <InputField
        value={regData?.form?.contactPhoneNumber || ""}
        name="contactPhoneNumber"
        show="block"
        handleFormChange={handleFormChange}
        placeholder="Contact Phone Number"
        displayEye={"false"}
        required="true"
        noTitle={false}
      />
        <InputField
          value={regData.form.username || ""}
          name="username"
          show="block"
          handleFormChange={handleFormChange}
          placeholder="Choose a username"
          displayEye={"false"}
          required="true"
          noTitle={false}
        />
      
      
      <Div display="flex" justify="center" margin="20px" alignI="flex-start">
        <AlertImg src={AlertCircle} alt="alert-circle" />
        <CautionText>
          Type in your correct name and use a good photo, make sure it is clear
          so that it will increases your chance of getting good gigs :)
        </CautionText>
      </Div>
    </>
  );
}
