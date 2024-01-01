import OTPField from "components/onboading/otpField";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import BrandColors from "GlobalStyles/utils/colors";
import React from "react";
import { RegText } from "../../common/style";
import Api from "../../../../api/index";
import { useRegContext } from "context/RegContext";

// export default function OTPForm() {
//   return (
//     <div>
//       <OTPField />
//       <Div display="flex" justify="center">
//         <RegText>
//           I did not receive it.
//           <SpottrLink to="" color={BrandColors.brandColor}>
//             {" "}
//             Please send a new one{" "}
//           </SpottrLink>
//         </RegText>
//       </Div>
//     </div>
//   );
// }

export default function OTPForm({ setToastType, setMessageContent }) {
  const { regData } = useRegContext();
  const handleOtpSend = () => {
    Api.signin.generateOTP({ identifier: regData.form.email }).then((res) => {
      if (res.status === true) {
        const errorMessage = "Otp Send Succcessful";
        setToastType("success");
        setMessageContent(errorMessage);
      } else if (res.status === false) {
        setToastType("Otp failed");
        setMessageContent(res.message);
      }
    });
  };
  return (
    <div>
      <OTPField />
      <Div display="flex" justify="center">
        <RegText>
          I did not receive it.
          <SpottrLink color={BrandColors.brandColor}>
            {" "}
            <a onClick={handleOtpSend}>Please send a new one </a>
          </SpottrLink>
        </RegText>
      </Div>
    </div>
  );
}
