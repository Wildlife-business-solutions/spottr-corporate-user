import React from "react";
import { Link } from "react-router-dom";
import { BottomFooter } from "../style";

const HomeFooter = () => {
  return (
    <div>
      <BottomFooter>
        <Link to="/about" className="ready-sub ">
          About
        </Link>
        <Link to="/terms" className="ready-sub ">
          Terms
        </Link>
        <Link to="/privacy" className="ready-sub ">
          Privacy
        </Link>
        <Link to="/" className="ready-sub ">
          Bussiness
        </Link>
        <Link to="/contact-us" className="ready-sub ">
          Contact
        </Link>
      </BottomFooter>
    </div>
  );
};

export default HomeFooter;
