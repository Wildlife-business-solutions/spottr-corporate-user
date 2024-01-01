import React from "react";
import { Home2Container, Home3Container } from "../style";
import Girl from "../../../assets/avatarGirl.png";
import Boy from "../../../assets/avatarBoy.png";
import Card1 from "../../../assets/card1.png";
import app from "../../../assets/app.png";
import Card2 from "../../../assets/card2.png";
import { Link } from "react-router-dom";
import Playstore from "../../../assets/playstore.svg";
import Apple from "../../../assets/applestore.svg";

const Home3 = () => {
  return (
    <div>
      <Home3Container className="home1">
        <div className=" d-flex position-relative">
          <div style={{ width: "40%" }}>
            <div style={{ position: "absolute", top: "-35px", left: " 100px" }}>
              <img src={app} alt="Spottr" style={{ width: "32vw" }} />
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
          <div className="flexRight ">
            <h1 className="captionText mb-4  poiret">
              Enjoy the best
              <br />
              mobile experience
            </h1>

            <p className="subText mb-4">As you wander through the city</p>
            <p className="discover_txt">
              Discover the best food, people and events
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
      </Home3Container>
    </div>
  );
};

export default Home3;
