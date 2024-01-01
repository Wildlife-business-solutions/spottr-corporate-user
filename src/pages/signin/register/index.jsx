import React from "react";
import LeftLayout from "components/onboading/leftLayout";
import RegForm from "./regForm";
import { JoinPageContainer } from "../common/style";

export default function JoinPage() {
  return (
    <JoinPageContainer>
      <LeftLayout buttonText="Login" />
      <RegForm />
    </JoinPageContainer>
  );
}
