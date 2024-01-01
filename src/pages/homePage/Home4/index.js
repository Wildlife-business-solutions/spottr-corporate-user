import React from "react";
import { Home4Container } from "../style";
import { Link } from "react-router-dom";
import Girl from "../../../assets/avatarGirl.png";
import Boy from "../../../assets/avatarBoy.png";
import Card1 from "../../../assets/card1.png";
import Card2 from "../../../assets/card2.png";
import dog from "../../../assets/dog.svg";
import Playstore from "../../../assets/playstore.svg";
import Apple from "../../../assets/applestore.svg";

const Home4 = () => {
  return (
    <div>
      <Home4Container className="home2">
        <div className=" d-flex position-relative">
          <div className="flexRight ">
            <h1 className="captionText mb-4  poiret">Out and About?</h1>

            <p className="subText mb-4">
              Get notified about the best shopping & location deals
            </p>

            <div className="d-flex appBox">
              <div>
                <a href="https://web.spottr.app" className="checkout">
                  <span className="link">Get Started</span>
                </a>
              </div>
              <div style={{ margin: "0px 50px" }}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.spottr.android.app "
                  className="d-flex l-app align-items-center justify-content-center p-1 ">
                  <div className=" m-2 ">
                    <img src={Playstore} alt="Appstore" />
                  </div>
                  <span className="download_icons">Google Play</span>
                </a>
              </div>
              <div>
                <Link
                  to=""
                  // onClick={notify}
                  className="d-flex l-app align-items-center  justify-content-center p-1">
                  <div className=" m-2 ">
                    <img src={Apple} alt="Appstore" />
                  </div>

                  <span className="download_icons">App Store</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Home4Container>
    </div>
  );
};

export default Home4;
