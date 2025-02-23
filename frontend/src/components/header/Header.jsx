import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">BankWave</div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/account/loan"}>Loan</Link>
        <Link to={"/createAccount"}>Open Digital A/C</Link>
        <Link to={"/about"}>Contact Us</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
