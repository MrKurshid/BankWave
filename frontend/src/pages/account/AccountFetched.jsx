import React from "react";
import "../auth/auth.css";

const AccountFetched = (user) => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Available balance</h2>
        <div>
          <h2 style={{ color: "black" }}>
            Your current balance is <h3 style={{ color: "green" }}>0.00</h3>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AccountFetched;
