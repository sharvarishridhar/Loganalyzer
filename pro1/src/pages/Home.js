import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner2.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          
      
          <Link to="/menu">
            <button>DEPARTMENTS</button>
            
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
