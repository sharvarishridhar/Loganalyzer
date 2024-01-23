import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/mechhod1.jpeg';
import { Link } from "react-router-dom";
import "../styles/MECH.css";
import Banner from "../images/web.jpg";

const MECHPage = () => {
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
<h1><u>Mechanical Engineering</u></h1>
</Box>
<Box
sx={{
  my: 1,
  textAlign: "left",
  color: 'white',
  p: 2,
}}
>
<img src={images} alt="mechhod1" height={"250"} width="250"/>
<h2 > Dr. Satyanarayan</h2>
</Box>
 
<div className="buttonmech">
    <Link to="/Mechlab1">
  <button>Mechlab1</button>
  </Link>
</div>
</div>
 </>
  )};
export default MECHPage;
