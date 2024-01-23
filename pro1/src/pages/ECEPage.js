import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/ecehod.jpeg';
import { Link } from "react-router-dom";
import "../styles/ECE.css";
import Banner from "../images/web.jpg";




const ECEPage = () => {
  return (
    <>
    <Header></Header>
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
<h1><u>Electronics And Communication Engineering</u></h1>
</Box>
<Box
sx={{
  my: 1,
  textAlign: "left",
  color: 'white',
  p: 2,
  
}}
>
  
<img src={images} alt="ecehod"  height={"250"} width="250"/>
<h2>Dr.Siddesh G K</h2>

</Box>
<br></br>
<div className="buttonece">

<Link to="/Elab1">
  <button>Elab1</button>
  </Link>
  <Link to="/Elab2">
  <button>Elab2</button>
  </Link>

 </div>
 </div>
 </>

  );
  };
  
  
export default ECEPage;
