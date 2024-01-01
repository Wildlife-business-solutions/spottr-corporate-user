import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import Filters from "../../search/Filters";
import eye from "assets/svg/eye.svg";
// import { GETRATES } from 'routes/backend';
// import axios from 'axios'
// import { useAuthContext } from "context/AuthContext";

const Card = ({ type, bg, amount, image, transactionHistory }) => {
  // const {user} = useAuthContext();
  // const [cliqtokenrate, setcliqtokendollarrate] = useState(0);

  // const dollarRate = (cliqtok, dollarrate) => {
  //     setcliqtokendollarrate(cliqtok * dollarrate)
  // }

  // useEffect(() => {
  //     axios.get(GETRATES, {
  //         headers: {
  //             'Authorization': `Bearer ${user.token}`
  //         }
  //     }).then(res => {
  //         setcliqtokenrate(res[0])
  //         // console.log(res)
  //     })

  // }, [])

  return (
    <Div
      onClick={transactionHistory}
      width="100%"
      backgroundColor={
        type === "Fiat Wallet"
          ? "hsla(88, 50%, 67%, 0.1)"
          : type === "Cliq Token"
          ? "hsla(7, 100%, 69%, 0.1)"
          : type === "SUSD"
          ? "hsla(41, 100%, 69%, 0.1)"
          : ""
      }
      br="8px"
      padding="25px 15px"
      margin="0 auto">
      <Div display="flex" alignI="center" justify="space-between">
        <Div
          display="flex"
          alignI="center"
          color="#274b89"
          fs="20px"
          width="50%">
          <img src={image} width="20px" height="20px" alt="wallet type" />
          <small style={{ paddingLeft: "10px" }}>{type}</small>
        </Div>
        <Filters
          options={["USD", "NGN"]}
          col="transparent"
          show="none"
          wd="50%"
          // action={(e) => setCurrency(e.target.value)}
        />
      </Div>
      <Div
        display="flex"
        alignI="center"
        justify="space-between"
        padding="15px 0">
        <Div color="#274b89" fs="20px" fw="bold">
          <p>
            {type === "Fiat Wallet" ? "" : ""}
            {amount}
          </p>
          {/* <p>{type !== "Fiat Wallet" ? <span>&#8776;</span> : ""}</p> */}
        </Div>
        <img src={eye} alt="view balance" />
      </Div>
    </Div>
  );
};

export default Card;
