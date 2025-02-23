import React from "react";
import "./createAcc.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Loan = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    toast.success("Application submitted");
    navigate("/account/ApplicationSubmitted");
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Apply For Loan</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" required />
          <label htmlFor="mobile">Mobile number</label>
          <input type="mobile" required />
          <label htmlFor="pan">Pan</label>
          <input type="pan" required />
          <label htmlFor="adhaar">Adhaar</label>
          <input type="adhaar" required />
          <label htmlFor="nomminee">Nomminee</label>
          <input type="nomminee" required />
          <label htmlFor="relation">Relation with nomminee</label>
          <input type="relation" required />
          <label htmlFor="address">Permanent Address</label>
          <input type="address" required />
          <button type="submit" className="common-btn">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loan;
