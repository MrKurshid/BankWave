import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

import "./account.css";
import { userData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setisAuth, setUser } = userData();

  const navigate = useNavigate();

  const transferHandler = () => {
    navigate("/account/transfer");
  };
  const historyHandler = () => {
    navigate("/account/history");
  };
  const balanceHandler = () => {
    navigate("/account/balance");
  };

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setisAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div>
      {user && (
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name- {user.name}</strong>
            </p>
            <p>
              <strong>Email- {user.email}</strong>
            </p>
            <button onClick={transferHandler} className="common-btn">
              <RiSecurePaymentFill />
              Transfer Money
            </button>
            <button onClick={historyHandler} className="common-btn">
              <GrTransaction />
              Transaction History
            </button>
            <button onClick={balanceHandler} className="common-btn">
              <FaBalanceScaleLeft />
              Check Balance
            </button>
            <br />
            <button
              onClick={logoutHandler}
              className="common-btn"
              style={{ background: "red" }}
            >
              <IoMdLogOut /> LogOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
