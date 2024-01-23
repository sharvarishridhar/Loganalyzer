import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/isehod.jpeg';
import { Link } from "react-router-dom";
import "../styles/ISE.css";
import Banner from "../images/web.jpg";

const ISEPage = () => {
  return (
    <>
    <Header></Header>
<br></br>
<br></br>
<div className="menu" style={{ backgroundImage: `url(${Banner})` }}>
<Box
sx={{
  my: 1,
  textAlign: "center",
  color:"goldenrod",
  p:1,
  
}}
>
<h1><u>Information Science And Engineering</u></h1>
</Box>
<Box
sx={{
  my: 1,
  textAlign: "left",
  color: 'white',
  p: 2,
  
}}
>
  
<img src={images} alt="isehod"  height={"250"} width="250"/>
<h2>Dr.Sudheer Shetty</h2>

</Box>
<div className="buttonise">
<Link to="/Ilab1">
  <button>NETWORK/WEB-LAB</button>
  </Link> 
 

  </div>
  </div>
 </>

  )};
  
  
export default ISEPage;
