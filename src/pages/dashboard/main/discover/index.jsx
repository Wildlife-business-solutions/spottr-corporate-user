import React, { useEffect, useState } from "react";
import { useAdminModalContext } from "context/AdminModalContext";
import CategoryContent from "./categories";
import DiscoverWallarea from "./walletarea";
import { Button, Div, SpottrH, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { MapAreaDiscover } from "./walletarea/style";
import { ContainerTrendingDiscover, ItemCategoryContainer } from "./style";
import { Row, Column } from "../common/style";
import CheckAvailability from "./modal/checkAvailability";
import AdMapPin from "./modal/admap";
import TrendingSearch from "./trendeingSearch/index";
import DiscoveryTransactionActivity from "./discoveryTransactionActivity/index";
import DiscoverRefer from "./discoverRefer";
import CreateAd from "./modal/createAd";
import { useSelector } from "react-redux";
import dropdown from "assets/mem/membertype.svg";
import userIcon from "assets/svg/userIcon1.svg";
import { Img } from "../../../../GlobalStyles/spotrrStyles/style";
import upgreen from "assets/svg/upgreen.svg";
import DiscoverCategoryModal from "./modal/discoverCategoryModal";
import { useHistory } from "react-router-dom";
import GoogleMaps from "components/dashboard/main/GoogleMap";
import Colors from "GlobalStyles/appColors";


function DiscoverPage() {
  const { showmodal, setShowModal } = useAdminModalContext();
  const { categories } = useSelector((state) => state.dashboardCategories);
  const [showMapAd, setShowMapAd] = useState(false);
  const [showAllCategory, setShowAllCategory] = useState(false);
  const [showproductad, setShowProductAd] = useState(false);
  const [showbannercreation, setShowBannerCreation] = useState(false);
  const [showDiscoverCategory, setShowDiscoverCategory] = useState(false);
  const [discoverDetails, setDiscoverDetails] = useState({});
  const history = useHistory();
  // const [showModal, setShowModal] = useState(second)
  // const [mainCategories, setMainCategories] = useState([]);

  const handleMapAd = () => {
    setShowModal(true);
    setShowMapAd(true);
    setShowProductAd(false);
    setShowBannerCreation(false);
    setShowDiscoverCategory(false);
  };

  const handleProductAd = () => {
    setShowModal(true);
    setShowMapAd(false);
    setShowProductAd(true);
    setShowBannerCreation(false);
    setShowDiscoverCategory(false);
  };

  const handleAdCreation = () => {
    setShowModal(true);
    setShowMapAd(false);
    setShowProductAd(false);
    setShowBannerCreation(true);
    setShowDiscoverCategory(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCategory = (item) => {
    setShowMapAd(false);
    setShowProductAd(false);
    setShowBannerCreation(false);
    setDiscoverDetails(item);
    setShowModal(true);
    setShowDiscoverCategory(true);
  };

  // useEffect(() => {
  //   categories &&
  //     setMainCategories(
  //       categories.filter((item) => item.displayImage && item.name.length < 10)
  //     );
  // }, [categories]);

  return (
    <>
      {showMapAd && (
        <CheckAvailability
          header="Check Availability"
          show={showmodal}
          close={handleCloseModal}
        />
      )}
      {showDiscoverCategory && (
        <DiscoverCategoryModal
          header={discoverDetails?.name}
          item={discoverDetails}
          show={showmodal}
          close={handleCloseModal}
        />
      )}
      {showproductad && (
        <AdMapPin
          header="Product List"
          show={showmodal}
          close={handleCloseModal}
        />
      )}
      {showbannercreation && (
        <CreateAd show={showmodal} close={handleCloseModal} />
      )}
      
      <Div width="100%" padding="0px 0px 50px 0px">
        <>
          <Row>
            <Column size={2}>

          <Div
            display="flex"
            justify="space-between"
            alignI="center"
            width="300px"
            height="120px"
            padding="20px"
            backgroundColor={Colors.white}
            br="10px"
            style={{ border: "0.9px solid #E1EFFB" }}
            >
            <Div > 
              <Div display="flex" width="100%" justify="space-between">
                <SpottrP color={Colors.primary} fs="20px" fw="bold " p="0 0 6px 0">
                  45
                </SpottrP>
                <Img src={userIcon} height="23px" width="23px" alt="User" />

              </Div>
              
              <Div display="flex" width="100%" justify="space-between">
                <small>Total members</small>
                <small style={{  }}>+ 34.98%</small>

              </Div>
            </Div>
            
          </Div>

            </Column>
            </Row>
          <Row>
            <Column size={2}>
              <MapAreaDiscover
              // onClick={handleMapAd}
              >
                <Div width="100%" height="350px" mb="15px">
                  {/* <iframe
                    title="map"
                    width="100%"
                    height="350px"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=spottr&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                    // src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&key=AIzaSyC7L4FduzOjHfe8v81bjj6FPHPs8e_yVoc&signature=uTiPm4Yr3GJpM-ZBjMRbZUGLnVU="
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  /> */}
                  <GoogleMaps />
                </Div>
                <ItemCategoryContainer style={{ marginTop: "20px" }}>
                  {categories.slice(0, 6)?.map((category, i) => (
                    <Div
                      cursor="pointer"
                      key={category.id}
                      onClick={() => handleCategory(category)}>
                      <CategoryContent
                        key={i}
                        image={category.displayImage}
                        text={category.name}
                      />
                    </Div>
                  ))}
                </ItemCategoryContainer>
                <Div backgorund="none" ta="center" margin="15px 0px 0px 0px ">
                  <Button
                    onClick={() => setShowAllCategory(!showAllCategory)}
                    m="10px"
                    bc="none">
                    View All
                    <span style={{ marginLeft: "10px" }}>
                      {!showAllCategory ? (
                        <img
                          src={dropdown}
                          className="dropdown_style"
                          alt="filter dropdown"
                        />
                      ) : (
                        <Img
                          src={upgreen}
                          alt="down"
                          width="15px"
                          height="15px"
                        />
                      )}
                    </span>
                  </Button>
                </Div>
                {showAllCategory && (
                  <ItemCategoryContainer
                    style={{ height: "24vh", overflow: "auto" }}>
                    {categories?.map((category, i) => (
                      <Div
                        margin="20px 0px 0px 0px"
                        flex="0 0 20%"
                        key={category.id}>
                        <CategoryContent
                          index={i}
                          image={category.displayImage}
                          text={category.name}
                        />
                      </Div>
                    ))}
                  </ItemCategoryContainer>
                )}
              </MapAreaDiscover>
              <>
                <DiscoverWallarea action={handleAdCreation} />
              </>
            </Column>
            <Column size={2}>
              <ContainerTrendingDiscover>
                <TrendingSearch />
              </ContainerTrendingDiscover>
            </Column>
            <Column width="23rem" size={2}>
              <ContainerTrendingDiscover>
                <DiscoveryTransactionActivity />
              </ContainerTrendingDiscover>
              <ContainerTrendingDiscover mt="15px">
                <DiscoverRefer />
              </ContainerTrendingDiscover>
            </Column>
          </Row>
          {/* <Row>
            <Column size={1}>
              <DiscoverWallarea action={handleAdCreation} />
            </Column>
          </Row> */}
        </>
      </Div>
    </>
  );
}

export default DiscoverPage;
