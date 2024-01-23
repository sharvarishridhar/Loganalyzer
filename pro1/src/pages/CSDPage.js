import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/csdhod.jpg';
import { Link } from "react-router-dom";
import "../styles/CSD.css";
import Banner from "../images/web.jpg";

const CSDPage = () => {
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
<h1><u>Computer Science And Design</u></h1>
</Box>
<Box
sx={{
  my: 1,
  textAlign: "left",
  color: 'white',
  p: 2,
  
}}
>
  
<img src={images} alt="csdhod"  height={"250"} width="250"/>
<h2>Prof. Jayanth Kumar Rathod</h2>
</Box>
<div className="buttoncsd">
<Link to="/Dlab1">
  <button>PROJECT LAB</button>
  </Link>
  </div>
  </div>
 </>

  )};
  
  
export default CSDPage;