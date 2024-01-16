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
import Icon87 from "assets/svg/87.svg";
import ActivityChart from "assets/svg/activityChart.svg";
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
        <Div display="flex" margin="0 0 20px 0" justify="space-evenly">

          <Div width="60%" margin="0 10px 0 0 ">
            <Div display="flex" justify="space-between">

              <Div width="100%" margin="0 10px 0 0" height="120px"  padding="20px" backgroundColor={Colors.white} br="10px" style={{ border: "0.9px solid #E1EFFB" }}>
                <Div display="flex" justify="space-between">
                  <Div fs="25px" color="#274B89" fw="bold" alignI="left">45</Div>
                  <Img src={userIcon} height="25px" width="25px" alt="User" />

                </Div>
                <br/>
                <Div display="flex" justify="space-between">
                  <small>Total members</small>
                  <small style={{ color:'#39B54A', fontSize: '14px', fontWeight: '400'  }}>+ 34.98%</small>
                </Div>
              </Div>

              <Div width="100%" margin="0 10px 0 0" height="120px" padding="20px" backgroundColor={Colors.white} br="10px" style={{ border: "0.9px solid #E1EFFB" }}>
                <Div display="flex" justify="space-between">
                  <Div fs="20px" color="#274B89" fw="bold" alignI="left">N22,030,789</Div>
                  <Img src={userIcon} height="25px" width="25px" alt="User" />

                </Div>
                <br/>
                <Div display="flex" justify="space-between">
                  <small>Total sales</small>
                  <small style={{ color:'#39B54A', fontSize: '14px', fontWeight: '400'  }}>+12.09%</small>
                </Div>
              </Div>

              <Div width="100%" margin="0 10px 0 0" height="120px" padding="20px" backgroundColor={Colors.white} br="10px" style={{ border: "0.9px solid #E1EFFB" }}>
                <Div display="flex" justify="space-between">
                  <Div fs="25px" color="#274B89" fw="bold" alignI="left">5,678</Div>
                  <Img src={userIcon} height="25px" width="25px" alt="User" />

                </Div>
                <br/>
                <Div display="flex" justify="space-between">
                  <small>Total customers</small>
                  <small style={{ color:'#FF4B3E', fontSize: '14px', fontWeight: '400'  }}> -2.98%</small>
                </Div>
              </Div>

            </Div>
            <br/>
            <Div display="flex" justify="space-between">

              <Div width="100%" margin="0 10px 0 0" height="180px"  padding="20px" backgroundColor={Colors.white} br="10px" style={{ border: "0.9px solid #E1EFFB" }}>
                <Div display="contents" >
                  <Div fs="15px" color="#274B89" fw="bold" alignI="left">Performances</Div>

                  <Div  display="flex" justify="flex-end" ><Img src={Icon87} /></Div>

                  <small style={{  fontSize: '12px', fontWeight: '400'  }}>45 new ads running </small>
                </Div>
              </Div>
              
              
              <Div width="100%" margin="0 10px 0 0" height="180px"  padding="20px" backgroundColor={Colors.white} br="10px" style={{ border: "0.9px solid #E1EFFB" }}>
                <Div display="contents" >
                  <Div fs="15px" color="#274B89" fw="bold" alignI="left">Search response</Div>

                  <Div  display="flex" justify="flex-end" ><Img src={Icon87} /></Div>

                  <small style={{  fontSize: '12px', fontWeight: '400'  }}>View brands </small>
                </Div>
              </Div>

              


            </Div>

          </Div>

          <Div display="flex" justify="" width="40%">
            <GoogleMaps />
            </Div>
        </Div>



          <Row>
            <Column size={2}>
              <MapAreaDiscover
              // onClick={handleMapAd}
              >
                <Div width="100%" height="350px" mb="15px">
                <Div display="flex" justify="space-between">
                  <Div fs="15px" color="#274B89" fw="bold" alignI="left">Transaction activity</Div>


                  <small style={{  fontSize: '12px', fontWeight: 'bold', color: '#274B89'  }}>Total in </small>
                  <small style={{  fontSize: '12px', fontWeight: 'bold', color: '#274B89'  }}>Total Out </small>
                </Div>

                <Img src={ActivityChart} width={"100%"} height={"100%"}/>
                  
                </Div>
                
                
                
              </MapAreaDiscover>
              <>
              </>
            </Column>
            {/* <Column size={2}>
              <ContainerTrendingDiscover>
                <DiscoveryTransactionActivity />
              </ContainerTrendingDiscover>
              <ContainerTrendingDiscover mt="15px">
                <DiscoverRefer />
              </ContainerTrendingDiscover>
            </Column> */}
            <Column size={2}>
              <ContainerTrendingDiscover>
                <TrendingSearch />
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
