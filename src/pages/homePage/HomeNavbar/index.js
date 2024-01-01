import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo-White.svg";
import { NavbarContainer } from "../style";
import { SIGNUP } from "../../../utilities/static/routes/routes";

const HomeNavbar = () => {
  return (
    <NavbarContainer className="navbar">
      <div className="sptr-navbar ">
        <div>
          <Link to="/">
            <img src={Logo} alt="Spottr" className="logo" />
          </Link>
        </div>
        <div className="mt-2 grid">
          <>
            <Link to="/login" className="login">
              <span className="link">Login</span>
            </Link>
            <Link to={SIGNUP} className="sign-up">
              <span className="link">Sign up</span>
            </Link>
          </>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default HomeNavbar;
