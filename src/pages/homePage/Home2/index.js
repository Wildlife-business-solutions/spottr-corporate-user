import React from "react";
import { Home2Container } from "../style";
import { Link } from "react-router-dom";
import Girl from "../../../assets/avatarGirl.png";
import Boy from "../../../assets/avatarBoy.png";
import Card1 from "../../../assets/card1.png";
import Card2 from "../../../assets/card2.png";
import dog from "../../../assets/dog.svg";
import Playstore from "../../../assets/playstore.svg";
import Apple from "../../../assets/applestore.svg";
import app from "../../../assets/app.png";

const Home2 = () => {
  return (
    <div>
      <Home2Container className="home2">
        <div className=" d-flex position-relative">
          <div className="flexRight ">
            <h1 className="captionText  poiret">
              Lifestyle,
              <br />
              Commerce,
            </h1>
            <h1 className="captionText mb-4 textEffect p-50 poiret">
              <p>Your best friend</p>
            </h1>

            <p className="subText mb-4">
              Shopping deals, wallets, all you need in your pocket
            </p>

            <div className="d-flex appBox">
              <div>
                <a href="https://web.spottr.app" className="checkout">
                  <span className="link">Get Started</span>
                </a>
              </div>
              <div style={{ margin: "0px 60px" }}>
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
              <div className="dog_img">
                <img
                  src={dog}
                  alt="dog"
                  style={{ position: "relative", top: "50px" }}
                />
              </div>
            </div>
          </div>
          <div className="left_content">
            <div style={{ position: "absolute", top: "-60px" }}>
              <img
                src={app}
                alt="Spottr"
                style={{ width: "31vw", transform: "rotate(15deg)" }}
              />
            </div>
            <div className="globeBoy">
              <img src={Boy} alt="Spottr" />
            </div>
            <div className="globeGirl">
              <img src={Girl} alt="Spottr" />
            </div>
            <div className="card1">
              <img src={Card1} alt="Spottr" />
            </div>
            <div className="card2">
              <img src={Card2} alt="Spottr" />
            </div>
          </div>
        </div>
      </Home2Container>
    </div>
  );
};

export default Home2;
