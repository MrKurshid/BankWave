import React, { useState } from "react";
import "../auth/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../context/UserContext";
import toast from "react-hot-toast";

const Balance = () => {
  const navigate = useNavigate();
  const { btnLoading } = userData();

  const submitHandler = async (e) => {
    e.preventDefault();
    toast.success("Account fetched");
    navigate("/account/account-fetched");
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Check balance</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="password">Password</label>
          <input type="password" required />
          <button disabled={btnLoading} type="submit" className="common-btn">
            {btnLoading ? "Please wait..." : " Check"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Balance;
