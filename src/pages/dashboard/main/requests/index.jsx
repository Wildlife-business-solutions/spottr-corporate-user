import React, { useState } from "react";
import { useAdminModalContext } from "context/AdminModalContext";
import RequestsHeader from "../search/Search";
import ReceivedReq from "./received/";
import SentReq from "./sent/";
import Productdetail from "../searchrequests/productdetail";
import RequestDialog from "components/UI/Dialog";
import Logistics from "./logistics/logistics";
import Payment from "./payment/payment";

import { LoginButton } from "pages/signin/Login/style";
import { Div, Img, SpottrP, Input } from "GlobalStyles/spotrrStyles/style";
import greenalert from "assets/svg/green.svg";
import yellowalert from "assets/svg/yellow.svg";
import stroke from "assets/svg/stroke.svg";
import edit from "assets/svg/editdes.svg";
import rating from "assets/svg/star.svg";
import blue from "assets/svg/markpnt.svg";
import feedback from "assets/svg/feedbacks.svg";
import report from "assets/svg/reports.svg";
import { BackText } from "../../../signin/common/style";
import backArrow from "assets/svg/backArrow.svg";
import CustomInvoice from "./customInvoice.js";
import Colors from "../../../../GlobalStyles/utils/appColors";
import BrandColors from "../../../../GlobalStyles/utils/colors";

const Requests = () => {
  const [requestsMenu, setRequestsMenu] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [customOffer, setCustomOffer] = useState(false);
  const [requireLogistics, setRequiresLogistics] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [viewLogistics, setViewLogistics] = useState(false);
  const [mark, setMark] = useState({});
  const [des, setDes] = useState({});
  const [isPayment, setIsPayment] = useState(false);
  const [logisticsDialog, setLogisticsDialog] = useState(false);
  const { showmodal, setShowModal } = useAdminModalContext();
  const [setRating, showSetRating] = useState(false);

  function handleRequestsMenuChange(item) {
    setRequestsMenu(item);
  }

  React.useEffect(() => {
    console.log(logisticsDialog, "logisticsDialog");
  }, [logisticsDialog]);

  const handleProceedRequire = () => {
    setRequiresLogistics(true);
    setShowModal(false);
  };

  const handleRequiresLogistics = () => {
    setShowModal(true);
    // setViewLogistics(false);
    setIsPayment(false);
    setLogisticsDialog(true);
    // setRequiresLogistics(true);
  };

  const handleCloseRequiresLogistics = () => {
    setRequiresLogistics(false);
    setShowModal(false);
  };

  const handleEditDestination = (e) => {
    const { name, value } = e.target;
    setDes({ ...des, [name]: value });
  };

  const handleEditMark = (e) => {
    const { name, value } = e.target;
    setMark({ ...mark, [name]: value });
  };

  const handleDeliveryConfirmation = () => {
    setConfirmOrder(false);
    setIsConfirmed(true);
  };

  const handleLogistics = () => {
    setViewLogistics(true);
    // setRequiresLogistics(false)
  };
  const handleCustomOffer = () => {
    setCustomOffer(false);
    setIsAccepted(false);
    setShowPopup(false);
  };

  const handleLogisticsPayment = () => {
    setShowModal(true);
    setViewLogistics(false);
    setIsPayment(true);
    setLogisticsDialog(false);
  };

  const handleCloseLogisticsPayment = () => {
    setShowModal(false);
  };

  const handleUserRating = () => {
    showSetRating(true);
    setRequiresLogistics(false);
    setShowModal(false);
  };

  const inputstyle = {
    padding: "30px 0 5px 0",
    border: "none",
    fontSize: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    width: "100%",
    fontFamily: "Nunito",
    backgroundColor: "transparent",
  };

  return (
    <>
      {isPayment && (
        <Payment
          show={showmodal}
          close={handleCloseLogisticsPayment}
          handleUserRating={handleUserRating}
          setRating={setRating}
        />
      )}
      <Div>
        {logisticsDialog && (
          <RequestDialog
            show={showmodal}
            close={handleCloseRequiresLogistics}
            proceed={handleProceedRequire}
            // proceed={() => setRequiresLogistics(true)}
            dialoghead="Require Logistics?"
            dialogcontent="Does this product require logistics?"
          />
        )}
        <RequestsHeader searchheader="Requests" />
        {isAccepted && requestsMenu === 1 ? (
          <Div display="flex" gap="50px">
            <Div width="620px" backgroundColor="#fff">
              <Productdetail
                requireLogistics={requireLogistics}
                action={handleRequiresLogistics}
              />
            </Div>
            {setRating && (
              <Div
                width="420px"
                height="676px"
                backgroundColor="#fff"
                margin="0 0 0 35px"
                padding="0 45px">
                <Div
                  display="flex"
                  flexDirection="column"
                  justify="center"
                  alignI="center"
                  padding="30% 0 0 0">
                  <SpottrP fw="bold" fs="26px" color="#274b89">
                    Rate User
                  </SpottrP>
                  <Div
                    width="230px"
                    padding="8px 0 0 0"
                    display="flex"
                    justify="space-between"
                    alignI="center">
                    <Img src={rating} w="37px" h="37px" />
                    <Img src={rating} w="37px" h="37px" />
                    <Img src={rating} w="37px" h="37px" />
                    <Img src={rating} w="37px" h="37px" />
                    <Img src={rating} w="37px" h="37px" />
                  </Div>
                </Div>
                <Div
                  height="64px"
                  width="100%"
                  border="1px solid #E6E7EF"
                  margin="25% 0 0 0">
                  <SpottrP p="18px 0 0 25px">Update Status *</SpottrP>
                </Div>
                <Div
                  display="flex"
                  justify="space-between"
                  padding="15px 0 0 0">
                  <Div
                    display="flex"
                    flexDirection="column"
                    justify="space-between"
                    padding="15px 0">
                    <Div display="flex" alignI="center" fs="13px">
                      <Img src={blue} />
                      <SpottrP p="0 0 0 10px">
                        Last Update: Payment Confirmed
                      </SpottrP>
                    </Div>
                    <Img
                      src={stroke}
                      height="27px"
                      style={{ alignSelf: "flex-start" }}
                      m="0 0 0 15px"
                    />
                    <Div display="flex" alignI="center" fs="13px">
                      <Img src={yellowalert} />
                      <SpottrP p="0 0 0 10px">Ordered Delivered</SpottrP>
                    </Div>
                    <Img
                      src={stroke}
                      height="27px"
                      style={{ alignSelf: "flex-start" }}
                      m="0 0 0 15px"
                    />
                    <Div display="flex" alignI="center" fs="13px">
                      <Img src={blue} />
                      <SpottrP p="0 0 0 10px">Deal Completed</SpottrP>
                    </Div>
                  </Div>
                  <Div></Div>
                </Div>
                <Div display="flex" justify="space-between" padding="15% 0 0 0">
                  <Img src={feedback} />
                  <Img src={report} />
                </Div>
              </Div>
            )}

            {requireLogistics && (
              <Div
                width="auto"
                height="fit-content"
                backgroundColor="#fff"
                br="23px"
                padding="35px"
                margin="0 0 0 40px"
                boxShadow="0px 0px 20px rgba(0, 0, 0, 0.07)">
                {viewLogistics ? (
                  <>
                    <Div
                      color="#274b89"
                      display="flex"
                      justify="space-between"
                      fs="14px"
                      padding="0 0 15px 0">
                      <SpottrP>Confirm Order</SpottrP>
                      <SpottrP
                        cursor={true}
                        fw="bold"
                        onClick={() => setViewLogistics(false)}>
                        Cancel
                      </SpottrP>
                    </Div>
                    <Logistics />
                    <Logistics />
                  </>
                ) : (
                  !viewLogistics && (
                    <>
                      <Div
                        color="#274b89"
                        display="flex"
                        justify="space-between">
                        <SpottrP>Set delivery mark</SpottrP>
                        <SpottrP fw="bold" fs="15px" cu>
                          Cancel
                        </SpottrP>
                      </Div>

                      <Div
                        display="flex"
                        justify="space-between"
                        padding="15px 0 0 0">
                        <Div
                          display="flex"
                          flexDirection="column"
                          justify="space-between"
                          padding="15px 0">
                          <Img src={greenalert} />
                          <Img src={stroke} height="27px" />
                          <Img src={yellowalert} />
                        </Div>
                        {isConfirmed ? (
                          <Div padding="12px 0 0 0" fs="13px">
                            <Div display="flex">
                              <Div
                                height="46px"
                                width="230px"
                                backgroundColor="#f8f8f8"
                                padding="13px 10px">
                                {des.destination}
                              </Div>
                              <Img m="0 0 0 12px" src={edit} cursor={true} />
                            </Div>
                            <Div display="flex" margin="10px 0">
                              <Div
                                margin="10px 0 0 0"
                                height="46px"
                                width="230px"
                                backgroundColor="#f8f8f8"
                                padding="13px 10px">
                                {mark.marked}
                              </Div>
                              <Img m="0 0 0 12px" src={edit} cursor={true} />
                            </Div>
                          </Div>
                        ) : (
                          <Div>
                            <Input hg="46px" wd="260px" p="0 0 0 10px">
                              <input
                                type="text"
                                placeholder="Current destination"
                                name="destination"
                                onChange={handleEditDestination}
                              />
                            </Input>
                            <Input hg="46px" wd="260px" p="0 0 0 10px">
                              <input
                                type="text"
                                name="marked"
                                placeholder="Marked destination"
                                onChange={handleEditMark}
                              />
                            </Input>
                          </Div>
                        )}
                      </Div>

                      {!isConfirmed && (
                        <LoginButton
                          wbtn="100%"
                          bg="#274B89"
                          hg="auto"
                          mg="15px 0"
                          onClick={handleDeliveryConfirmation}>
                          Continue
                        </LoginButton>
                      )}

                      {isConfirmed && (
                        <>
                          <Div>
                            <SpottrP
                              color="#274b89"
                              p="20px 0 15px 25px"
                              fs="15px">
                              Closest Logistics Services
                            </SpottrP>
                            <Logistics />
                            <SpottrP
                              p="4px 0 0 0"
                              tAlign="right"
                              fs="11px"
                              fw="bold"
                              color="#274b89"
                              cursor={true}
                              onClick={handleLogistics}>
                              view more logistics
                            </SpottrP>

                            <Div ta="center" padding="20px 0 0 0">
                              <SpottrP color="rgba(59, 59, 59, 0.7)" fs="12px">
                                Total Cost
                              </SpottrP>
                              <SpottrP
                                color="#274b89"
                                fw="bold"
                                fs="36px"
                                p="12px 0 0 0">
                                N4,500,700
                              </SpottrP>
                            </Div>
                          </Div>
                          <LoginButton
                            wbtn="100%"
                            bg={BrandColors.brandBlue}
                            mg="15px 0"
                            onClick={handleLogisticsPayment}>
                            Continue
                          </LoginButton>
                        </>
                      )}
                    </>
                  )
                )}
              </Div>
            )}
          </Div>
        ) : (
          <Div>
            <Div margin="0 0 30px 0" display="flex">
              <img src={backArrow} alt="arrow" />
              <BackText>Go Back</BackText>
            </Div>
            <Div width="100%" gap="100px" display="flex">
              <Div
                width="45%"
                height="731px"
                backgroundColor="#fff"
                br="3px"
                margin="0px 0px 30px 0px"
                padding="35px">
                <Div display="flex" width="60%">
                  <LoginButton
                    className={requestsMenu === 0 && "activeBtn"}
                    onClick={() => !showPopup && handleRequestsMenuChange(0)}
                    wbtn="146px"
                    p="12px 0"
                    col="rgba(59, 59, 59, 0.7)"
                    bld="300"
                    fz="13px">
                    Received requests
                  </LoginButton>
                  <LoginButton
                    className={requestsMenu === 1 && "activeBtn"}
                    onClick={() => !showPopup && handleRequestsMenuChange(1)}
                    brd="1px solid #c4c4c4"
                    fz="13px"
                    mg="0 0 0 15px"
                    col="rgba(59, 59, 59, 0.7)"
                    wbtn="146px"
                    p="12px 0"
                    bld="300">
                    Sent requests
                  </LoginButton>
                </Div>
                <Div margin="40px 0 0 0">
                  {requestsMenu === 0 && (
                    <ReceivedReq
                      setShowPopup={setShowPopup}
                      showPopup={showPopup}
                      setIsAccepted={setIsAccepted}
                      isAccepted={isAccepted}
                      request={"receive"}
                    />
                  )}
                  {requestsMenu === 1 && (
                    <SentReq
                      setShowPopup={setShowPopup}
                      setIsAccepted={setIsAccepted}
                      setCustomOffer={setCustomOffer}
                      customOffer={customOffer}
                      isAccepted={isAccepted}
                      request={"send"}
                    />
                  )}
                </Div>
              </Div>

              {isAccepted && requestsMenu === 0 && (
                <CustomInvoice
                  handleCustomOffer={handleCustomOffer}
                  setCustomOffer={setCustomOffer}
                  customOffer={customOffer}
                  inputstyle={inputstyle}
                />
              )}
            </Div>
          </Div>
        )}
      </Div>
    </>
  );
};

export default Requests;
