import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/civilhod.jpeg';
import { Link } from "react-router-dom";
import "../styles/CIVIL.css";
import Banner from "../images/web.jpg";


const CIVILPage = () => {
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
<h1><u>Civil Engineering</u></h1>
</Box>
<Box
sx={{
  my: 1,
  textAlign: "left",
  color: 'white',
  p: 2,
  
}}
>
  
<img src={images} alt="civilhod"  height={"250"} width="250"/>
<h2>Dr.H Ajith Hebber</h2>
</Box>
<div className="buttoncivil">
<Link to="/Vlab1">
  <button>Vlab1</button>
  </Link>
 </div>
 </div>
 </>

  )};
  
  
export default CIVILPage;
