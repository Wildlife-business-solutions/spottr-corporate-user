import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { useHistory } from "react-router-dom";

const Walletitems = ({ content, component, handleOpenModal }) => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/dashboard/transactions");
  };
  return (
    <Div
      fs="15px"
      fw="600"
      className="trxnitems"
      onClick={() => handleOpenModal(component)}>
      <p onClick={handleRedirect} style={{ paddingBottom: "12px" }}>
        {content}
      </p>
      <Div width="100%" bbm="1px solid #E7E7E7"></Div>
    </Div>
  );
};

export default Walletitems;
