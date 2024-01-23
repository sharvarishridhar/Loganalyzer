import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Banner from "../images/web.jpg";
const About = () => {
  return (
    
    <Layout>
     <div className="about" style={{ backgroundImage: `url(${Banner})` }}>  </div>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">ALVA’S INSTITUTE OF ENGINEERING & TECHNOLOGY (AIET)</Typography>
        <p>
        Alva’s Education Foundation® (AEF) was born out of the entrepreneurial vision of Dr M Mohan Alva, an ayurvedic doctor, an educationalist and a social reformer in Moodubidri, South India. Alva’s Institute of Engineering and Technology is a premier engineering college situated in Mijar was founded in 2008 by AEF to provide affordable quality professional education to the youth of this underdeveloped region.

Established in 2008, AIET has launched path-breaking initiatives in Indian higher education with the introduction of innovative and modern curricula, insistence on academic discipline, imparting of Holistic Education and adoption of global higher education practices with the support of creative and dedicated staff. The Institute is affiliated to Visvesvaraya Technological University, Belagavi and recognised by AICTE and University Grants Commission (UGC) of India.  In the last academic year two of its departments Electronics and Communication Engineering and Computer Science Department have secured NBA accreditation.
        </p>
        <br />
        <p>
        AIET in its endeavour to excel in teaching, research and service offers Bachelor’s Degree in Mechanical Engineering, Electronics and Communication Engineering, Computer Science Engineering, IT Enabled Services Engineering, and Civil Engineering.  AIET also offers a post graduate degree in Business Administration.
        </p>
      
      </Box>
      
    </Layout>
    
  );
};

export default About;
