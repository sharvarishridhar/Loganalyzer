import React from "react";
import Banner from "../images/web.jpg";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {const navigate = useNavigate();
   const handlePageRoute=(path)=>{
    navigate(path);
   }
  return (
    <Layout>
      <div className="menu" style={{ backgroundImage: `url(${Banner})` }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
                onClick={()=>{
                  handlePageRoute(menu.path)
                }}
                

              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      </div>
    </Layout>
  );
};

export default Menu;
