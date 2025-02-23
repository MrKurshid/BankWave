import React from "react";
import "../auth/auth.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    toast.success("submited");
    navigate("/account/query");
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Contact Us</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" required />
          <label htmlFor="mobile">Mobile Number</label>
          <input type="mobile" required />
          <label htmlFor="password">Query</label>
          <textarea
            style={{ height: "100px", width: "300px" }}
            type="password"
            required
          />
          <button type="submit" className="common-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
