import React from 'react';
import Header from '../components/Layout/Header';
import { Box } from '@mui/material';
import images from '../images/aimlhod.jpeg';
import { Link } from "react-router-dom";
import "../styles/AIML.css";
import Banner from "../images/web.jpg";


const AIMLPage = () => {
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
<h1><u>Artificial Intelligence And Machine Learning</u></h1>
</Box>
<Box
sx={{
  my: 1,
  textAlign: "left",
  color: 'white',
  p: 2,
  
}}
>
  
<img src={images} alt="aimlhod"  height={"250"} width="250"/>
<h2>Mr. Harish Kunder</h2>
</Box>
<div className="buttonaiml">
<Link to="/Alab1">
  <button>AI/MOBILE APP DEVELOP-LAB</button>
  </Link>

  <Link to="/Alab1">
  <button> DBMS / DIP  LAB</button>
  </Link>

  <Link to="/Alab1">
  <button>DS / DAA LAB </button>
  </Link>

  </div>
  </div>
 </>

  )};
  
  
export default AIMLPage;
