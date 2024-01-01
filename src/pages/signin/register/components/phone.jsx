import React from "react";
import "react-phone-input-2/lib/style.css";
import { useRegContext } from "context/RegContext";
import { PhoneField } from "../../common/style";

export default function Phone() {
  const { regData, setRegData } = useRegContext();

  const onChangePhone = (phoneNumber, value) => {
    let codeLength = value?.dialCode.length;

    let requiredValue = phoneNumber.slice(codeLength, phoneNumber.length);

    setRegData({
      ...regData,
      form: {
        ...regData.form,
        phoneNumber,
        phoneNumber_withoutCountryCode: requiredValue,
      },
    });
  };
  return (
    <>
      <PhoneField
        country={"ng"}
        onChange={(phoneNumber, value) =>
          `+${onChangePhone(phoneNumber, value)}`
        }
        placeholder="Phone Number"
        value={regData.form.phoneNumber}
        inputStyle={{
          width: "100%",
          height: "45px",
          backgroundColor: "#f0f0f0",
          border: "none",
        }}
      />
    </>
  );
}
