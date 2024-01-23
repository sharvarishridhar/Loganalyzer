import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/csehod.jpg';
import { Link } from "react-router-dom";
import "../styles/CSE.css";
import Banner from "../images/web.jpg";

const CSEPage = () => {
  return (
    <>
      <Header></Header>
      <br></br>
      <br></br>
      <div className="menu" style={{ backgroundImage: `url(${Banner})` }}>
        <Box
          sx={{
            
            textAlign: "center",
            color: "goldenrod",
          
          }}
        >
          <h1><u>Computer Science And Engineering</u></h1>
        </Box>
        <Box
          sx={{
            textAlign: "left",
            color: 'white',
          }}
        >
          <img src={images} alt="csehod" height={"250"} width="250" />
          <h2>Dr. Manjunath Kotari </h2>
        </Box>
        <br></br>
        <br></br>
        <div className="buttoncse">
          <Link to="/Clab1">
            <button>INTERNET LAB</button>
          </Link>

          <Link to="/Clab2">
            <button>WEB/APP/ML-LAB</button>
          </Link>

          <Link to="/Clab3">
            <button>DS/DAA LAB</button>
          </Link>

          <Link to="/Clab4">
            <button>ADE/MES LAB</button>
          </Link>

          <Link to="/Clab5">
            <button>DBMS LAB</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CSEPage;
