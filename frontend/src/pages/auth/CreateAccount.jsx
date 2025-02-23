import React, { useState } from "react";
import "./createAcc.css";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../context/UserContext";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { btnLoading, createAccount } = userData();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pan, setPan] = useState("");
  const [adhaar, setAdhaar] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [nomminee, setNomminee] = useState("");
  const [relation, setRelation] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await createAccount(
      name,
      email,
      pan,
      adhaar,
      mobile,
      address,
      nomminee,
      relation,
      navigate
    );
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Open Digital Account</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="pan">Pan</label>
          <input
            type="pan"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            required
          />
          <label htmlFor="adhaar">Adhaar</label>
          <input
            type="adhaar"
            value={adhaar}
            onChange={(e) => setAdhaar(e.target.value)}
            required
          />
          <label htmlFor="nomminee">Nomminee</label>
          <input
            type="nomminee"
            value={nomminee}
            onChange={(e) => setNomminee(e.target.value)}
            required
          />
          <label htmlFor="relation">Relation with nomminee</label>
          <input
            type="relation"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            required
          />
          <label htmlFor="address">Permanent Address</label>
          <input
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button type="submit" disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please wait..." : "Create account"}
          </button>
        </form>
        <p>
          Have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
