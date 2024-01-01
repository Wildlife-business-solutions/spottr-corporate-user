import React, { useRef, useState } from "react";
import PaymentModal from "components/modals/paymentModal";
import TransactionResultModal from "components/modals/transactionResultModal";
import { useParams } from "react-router-dom";
import SetAdsModal from "components/modals/setAdsModal";
import Dropdown from "react-bootstrap/Dropdown";
import { Div, Img, SpottrLink, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { Button } from "GlobalStyles/spotrrStyles/style";
import { BsThreeDotsVertical } from "react-icons/bs";
import backArrow from "assets/svg/backArrow.svg";
import image from "assets/opImage.png";
import Colors from "GlobalStyles/appColors";
import ProductImage1 from "assets/productimg1.png";
import ProductImage2 from "assets/productimg2.png";
import ProductImage3 from "assets/productimg3.png";
import { OPPORTUNITIES } from "utilities/static/route-const";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router";
import AdMapPin from "../discover/modal/admap";
import CreateAd from "../discover/modal/createAd";
import { useCorporateProduct } from "context/addProduct";
import {
  addToDraft,
  addToPublishedData,
  removeFromDraft,
  removeFromPublishedData,
} from "store/dashboardData/dashboardDataReducer";
import { setUserProfile } from "store/corporateUserDetails/corporateUserDetailsReducer";
import { setProfile } from "store/messages/messageReducer";
import DynamicModal from "components/modals/dynamicModal";
import GoogleMap from "components/dashboard/main/GoogleMap";
import ProductPageContent from "./productPageContent";
import CreateTask from "./createTaskModalFlow/createTask";
// import CreateTask from "./createTask";

const containerStyle = {
  width: "100%",
  height: "220px",
};

export default function ProductPage({ type }) {
  let { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { corporateProduct, setCorporateProduct } = useCorporateProduct();
  let { currentData } = useSelector((state) => state.dashboardData);
  let { data } = useSelector((state) => state.authorize);
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState("");
  const [showAdsModal, setShowAdsModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showTransResultModal, setShowTransResultModal] = useState(false);
  const btnPost = useRef("");

  React.useEffect(() => {
    setCorporateProduct({
      ...corporateProduct,
      page: 0,
    });
  }, []);

  const handlePost = () => {
    history.push("/dashboard/opportunities");
    dispatch(addToPublishedData(currentData));
    dispatch(removeFromDraft(currentData));
    // if (page === 1) {
    //   setShowAdsModal(true);
    // } else {
    //   btnPost.current["textContent"] = "Pay Now";
    //   setPage(1);
    // }
  };

  const handleProductImage = (i) => {
    if (i === 0) {
      return ProductImage1;
    }
    if (i === 1) {
      return ProductImage2;
    }
    if (i === 2) {
      return ProductImage3;
    }
  };

  const handleDropdownToggle = (value) => {
    if (value.toString() === "1") {
      setShowModal("showProductAd");
    }
    if (value.toString() === "2") {
      setShowModal("showBannerCreation");
    }
  };

  const handleCloseModal = () => {
    setShowModal("");
  };

  const handleUnpublish = () => {
    dispatch(removeFromPublishedData(currentData));
    dispatch(addToDraft(currentData));

    history.push("/dashboard/opportunities");
  };

  const handlePayLater = () => {};

  const handleCall = () => {
    setShowModal("showPhoneModal");
  };

  const handleMesssage = () => {
    dispatch(setProfile(currentData));
    history.push({
      pathname: "/dashboard/messages",
      search: "message",
    });
  };

  const handleInfo = () => {
    history.push({
      pathname: `/dashboard/profile`,
      search: "?profile",
    });
    dispatch(setUserProfile(currentData));
  };

  const handleDraft = () => {};

  return (
    <Div width="1100px" margin="30px 0">
      <SpottrLink to={OPPORTUNITIES}>
        <Div width="100px" display={"flex"}>
          <img src={backArrow} alt="icon" />
          <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
            Go back
          </p>
        </Div>
      </SpottrLink>
      <Div display="flex" margin="50px 0">
        <Div backgroundColor="#ffffff" width="65%" padding="0 0 50px 0">
          <Div pos="relative">
            <Div className="dot_menu" pos="absolute">
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  <BsThreeDotsVertical />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setShowModal("createTask")}>
                    Create Task
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Div>
            <GoogleMap style={containerStyle} />
            <Div
              backgroundColor="#ffffff"
              display="flex"
              justify-content="center"
              alignI="center">
              <Div
                zIndex="9"
                boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
                backgroundColor="#ffffff"
                width="80%"
                height="130px"
                margin="-50px auto 20px auto"
                padding="20px 20px 20px 20px"
                br="5px">
                <Div display="flex" width="100%" gap="10px">
                  <Div width="auto">
                    <Img
                      w="70px"
                      height="70px"
                      br="3px"
                      src={
                        search === "?product"
                          ? image
                          : currentData?.productImages[0]
                      }
                      alt={image}
                    />
                  </Div>
                  <Div width="85%" display="flex" flexDirection="column">
                    <Div>
                      <SpottrP
                        className="m-0"
                        fs="15px"
                        fw="bold"
                        color={Colors.darkblue}>
                        {search === "?product"
                          ? "10 Baskets of Tomatoes"
                          : currentData?.brandName}
                      </SpottrP>
                      <SpottrP
                        className="m-0"
                        fs="14px"
                        fw="bold"
                        color={Colors.blue}>
                        {search === "?product"
                          ? "Food Servicess"
                          : currentData?.username}
                      </SpottrP>
                      <SpottrP
                        className="m-0"
                        fs="12px"
                        color={Colors.darkblue}>
                        {search === "?product"
                          ? "Coker & Sons Ltd"
                          : currentData?.productName}
                      </SpottrP>
                    </Div>
                    <Div
                      width="100%"
                      display="flex"
                      justify="space-between"
                      alignI="center"
                      margin="15px 0px 0px 0px">
                      <SpottrP
                        className="m-0"
                        fs="12px"
                        fw="bold"
                        color={Colors.ligterGrey}>
                        Lagos, Nigeria
                      </SpottrP>
                      <Div display="flex" justify="flex-end" alignI="center">
                        <Div
                          br="3px"
                          padding="5px 10px"
                          width="100%"
                          backgroundColor={Colors.lightGreen}>
                          <SpottrP className="m-0" fs="12px">
                            {search === "?product"
                              ? "N4,800,000"
                              : currentData?.price}
                          </SpottrP>
                        </Div>
                        <SpottrP fs="9px" ml="5px">
                          {" "}
                          /day
                        </SpottrP>
                      </Div>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
          <Div display="flex" justify-content="center" alignI="center">
            <Div margin="0px auto 0px auto">
              {Array.from({ length: 3 }, (x, i) => i).map((i) => (
                <Img
                  key={i}
                  src={
                    search === "?product"
                      ? handleProductImage(i)
                      : currentData?.productImages[i]
                  }
                  width="220px"
                  height="400px"
                  m="5px"
                  br="10px"
                />
              ))}
            </Div>
          </Div>
          <Div
            className="d-flex justify-content-end position-relative"
            style={{ top: "20px", right: "20px" }}>
            <Dropdown onSelect={(e) => handleDropdownToggle(e)}>
              <Dropdown.Toggle className="promote_post_btn">
                <>Promote Post</>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">A</Dropdown.Item>
                <Dropdown.Item eventKey="2">B</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Div>

          <ProductPageContent
            handleInfo={handleInfo}
            handleCall={handleCall}
            handleMesssage={handleMesssage}
            handlePayLater={handlePayLater}
            btnPost={btnPost}
            page={page}
            handleDraft={handleDraft}
            handleUnpublish={handleUnpublish}
            handlePost={handlePost}
            currentData={currentData}
            id={id}
            search={search}
          />
        </Div>
      </Div>
      {showAdsModal && (
        <SetAdsModal
          showModal={showAdsModal}
          setShowModal={setShowAdsModal}
          setShowPaymentModal={setShowPaymentModal}
        />
      )}
      {showPaymentModal && (
        <PaymentModal
          showModal={showPaymentModal}
          setShowModal={setShowPaymentModal}
          setShowTransResultModal={setShowTransResultModal}
        />
      )}
      {showTransResultModal && (
        <TransactionResultModal
          showModal={showTransResultModal}
          setShowModal={setShowTransResultModal}
        />
      )}
      {showModal === "showProductAd" && (
        <AdMapPin
          header="Product List"
          show={showModal === "showProductAd"}
          close={handleCloseModal}
        />
      )}
      {showModal === "showPhoneModal" && (
        <DynamicModal
          header="Phone Number"
          show={showModal === "showPhoneModal"}
          close={handleCloseModal}>
          {data.phoneNumber}
        </DynamicModal>
      )}
      {showModal === "showBannerCreation" && (
        <CreateAd
          show={showModal === "showBannerCreation"}
          close={handleCloseModal}
        />
      )}
      {showModal === "createTask" && (
        <CreateTask
          show={showModal === "createTask"}
          close={handleCloseModal}
        />
      )}
    </Div>
  );
}
