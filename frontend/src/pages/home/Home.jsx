import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <img src={"./bnkimg.webp"} alt="" />
        <div>
          <h1>Welcome to BankWave</h1>
          <p>Invest, Grow, Excel</p>
          <button
            onClick={() => {
              navigate("/account");
            }}
            className="common-btn"
          >
            Get started
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
