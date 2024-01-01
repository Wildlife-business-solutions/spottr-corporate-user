import React, { useEffect, useState } from "react";
import Home1 from "./Home1/Home1";
import HomeFooter from "./HomeFooter/HomeFooter";
import { HomeWrapper } from "./style";
import "./index.css";
import HomeNavbar from "./HomeNavbar/index";
import Home2 from "./Home2";
import Home3 from "./Home3/index";
import Home4 from "./Home4/index";

const Home = () => {
  const [randomClass, setRandomClass] = useState("");

  useEffect(() => {
    const randomNumber = Math.random() * 100;
    if (randomNumber <= 25) {
      setRandomClass("home1");
    }
    if (randomNumber > 25 && randomNumber <= 50) {
      setRandomClass("home2");
    }
    if (randomNumber > 50 && randomNumber <= 75) {
      setRandomClass("home3");
    }
    if (randomNumber > 75 && randomNumber <= 100) {
      setRandomClass("home4");
    }
  }, []);

  return (
    <HomeWrapper className={randomClass}>
      <HomeNavbar />
      <div className="Home">
        {randomClass === "home1" && <Home1 />}
        {randomClass === "home2" && <Home2 />}
        {randomClass === "home3" && <Home3 />}
        {randomClass === "home4" && <Home4 />}
      </div>
      <HomeFooter />
    </HomeWrapper>
  );
};

export default Home;
