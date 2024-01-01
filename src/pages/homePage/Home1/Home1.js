import React from "react";
import { Link } from "react-router-dom";
import { Home1Container } from "../style";
import Globe from "./Globe";
import Girl from "../../../assets/avatarGirl.png";
import Boy from "../../../assets/avatarBoy.png";
import Card1 from "../../../assets/card1.png";
import Card2 from "../../../assets/card2.png";
import Playstore from "../../../assets/playstore.svg";
import Apple from "../../../assets/applestore.svg";

const Home1 = () => {
  return (
    <Home1Container className="home1">
      <div className=" d-flex position-relative">
        <div className="flexRight ">
          <h1 className="captionText mb-4  poiret">Never feel</h1>
          <h1 className="captionText mb-4 textEffect p-50 poiret">
            <p>lost in a city</p>
          </h1>

          <p className="subText mb-4">
            Discover the best food, people and events around the world
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
        <div className="a-banner-heroImg mt-4 ">
          <div className=" position-relative a-100">
            <div className="globeHome ">
              <Globe width={700} height={700} />
              {/* {isTabletOrMobile && <Globe />} */}
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
      </div>
    </Home1Container>
  );
};

export default Home1;
