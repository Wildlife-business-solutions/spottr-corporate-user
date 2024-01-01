import React, { useState } from "react";
import {
  CopyToClipBoardContainer,
  ReferralBody,
  ReferTextItemsContainer,
} from "./style";
import { Div, Img, SpottrH, SpottrP } from "GlobalStyles/spotrrStyles/style";
import Copyicon from "assets/svg/copyicon.svg";
import Colors from "GlobalStyles/utils/appColors";
import ReferralHeader from "../search/Search";
import concentric from "assets/svg/refdes.svg";
import party from "assets/svg/party.svg";
import lady from "assets/svg/lady.svg";
import guy from "assets/svg/userIcon.svg";
import TransactionResultModal from "components/modals/transactionResultModal";

function ReferralsPage() {
  const data = [
    {
      image: lady,
      name: "Amaka Mbah",
      uname: "saucekode",
    },
    {
      image: guy,
      name: "Lola Minijojo",
      uname: "lojo",
    },
    {
      image: lady,
      name: "Amaka Mbah",
      uname: "saucekode",
    },
    {
      image: guy,
      name: "Lola Minijojo",
      uname: "lojo",
    },
    {
      image: guy,
      name: "Lola Minijojo",
      uname: "lojo",
    },
    {
      image: lady,
      name: "Amaka Mbah",
      uname: "saucekode",
    },
  ];

  const [showModal, setShowModal] = useState();
  const [showRefLog, setShowRefLog] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText("AdewaleSpottr567");
  };

  return (
    <>
      {/*<RefStatus show={showModal} close={setShowModal}/>*/}
      <TransactionResultModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Div display="flex" flexDirection="column">
        <ReferralHeader searchheader="Referrals" />
        <Div
          display="flex"
          margin="40px 0"
          justify="center"
          alignI="center"
          height="100%">
          <ReferralBody>
            <Div pos="absolute" style={{ top: "-100px", left: "-10%" }}>
              <Img src={concentric} alt="concentric circle" />
            </Div>
            <Div pos="absolute" style={{ top: "0px", left: "0px" }}>
              <Img h="158px" w="158px" src={party} alt="party" />
            </Div>
            <ReferTextItemsContainer>
              <SpottrH fs="25px" color={Colors.white} p="15px 0">
                Earn NGN500 by sharing your link!
              </SpottrH>
              <CopyToClipBoardContainer>
                <Div cursor="pointer" onClick={copyToClipboard}>
                  <SpottrP color={Colors.white} fs="13px">
                    AdewaleSpottr567
                  </SpottrP>
                </Div>
                <Img
                  src={Copyicon}
                  width="20px"
                  height="20px"
                  alt="Copy Button"
                />
              </CopyToClipBoardContainer>
              <SpottrP color={Colors.white} fs="13px" p="55px 0 35px 0">
                You and your friend will earn NGN500 cash reward each with your
                code
              </SpottrP>
              <SpottrP
                fw="bold"
                fs="13px"
                color={Colors.white}
                cursor={true}
                onClick={() => setShowRefLog(true)}>
                Open referral log {">>"}{" "}
              </SpottrP>
            </ReferTextItemsContainer>
            {showRefLog && (
              <Div width="260px" color={Colors.white}>
                <SpottrP
                  tAlign="right"
                  p="0 0 25px 0"
                  color="#C2E0FF"
                  fw="bold"
                  fs="15px">
                  Withdraw
                </SpottrP>
                <Div>
                  <SpottrP tAlign="left" p="5px 10px" fw="bold" fs="15px">
                    Your earnings
                  </SpottrP>
                  <Div style={{ maxHeight: "350px", overflowY: "scroll" }}>
                    {data.map((ref, index) => (
                      <Div
                        onClick={handleOpenModal}
                        key={index}
                        backgroundColor="#4D6A99"
                        padding="10px 15px"
                        br="2px"
                        width="100%"
                        margin="0 0 6px 0"
                        cursor={true}>
                        <Div display="flex" justify="space-between">
                          <Div display="flex">
                            <Img src={ref.image} w="34px" h="34px" />
                            <Div padding="0 0 0 10px">
                              <SpottrP fs="12px">{ref.name}</SpottrP>
                              <SpottrP fs="12px">@{ref.uname}</SpottrP>
                            </Div>
                          </Div>
                          <SpottrP fs="12px" fw="bold">
                            NGN 500
                          </SpottrP>
                        </Div>
                      </Div>
                    ))}
                  </Div>
                </Div>
              </Div>
            )}
            {data.length === 0 && (
              <SpottrP color={Colors.white} fw="bold" fs="25px">
                You have no referrals
              </SpottrP>
            )}
          </ReferralBody>
        </Div>
      </Div>
    </>
  );
}

export default ReferralsPage;
