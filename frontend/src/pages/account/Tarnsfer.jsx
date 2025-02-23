import React from "react";
import "../auth/auth.css";
import "./transfer.css";
import { userData } from "../../context/UserContext";
import toast from "react-hot-toast";

const Tarnsfer = () => {
  const { btnLoading } = userData();

  const submitHandler = async (e) => {
    e.preventDefault();
    toast.error("Insufficient balance");
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Transfer Money</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="to">Mobile number</label>
          <input type="to" required />
          <label htmlFor="ammount">Ammount</label>
          <input type="ammount" required />
          <button type="submit" disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please wait..." : "Transfer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tarnsfer;
