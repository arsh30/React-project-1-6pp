import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1 className="logo">Tech Start</h1>
      <main className="rightSideMenu">
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        {/* #about -> coz hum ik id dedege agr ispr click krega to 
         idr ajega scroll hokr */}
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/services"}>Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;
