import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  createTheme,
  useMediaQuery,
  styled,
  Divider,
} from "@mui/material";
import Search from "./Search";
import CustomIcons from "./CustomIcons";
import { Link } from "react-router-dom";

const Header = () => {
  const logoURL =
    "https://iili.io/dKazscJ.png";
  // const subLogoURL =
  //   "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  const StyledHeader = styled(AppBar)(({ theme }) => ({
    background: "#00b560",
    height: " 62px",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      height: " 115px",
    },
  }));
  const StyledBox = styled(Link)(({ theme }) => ({
    marginLeft: '11.8%',
    lineHeight: 0,
    color: 'inherit',
    textDecoration: 'none',
    [theme.breakpoints.down("md")]: {
      margin: '10px 0 0 5.8%',
    },
  }));
  
  const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: "0 7% 0 auto ",
    [theme.breakpoints.down("md")]: {
      margin: "5px 2% 0 auto ",
    },
  }));

  // ----------------------RETURN-------------------------------
  const theme = createTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 62 }}>
        <StyledBox to="/">
          <img src={logoURL} alt="logo" style={{ width: "150px" }} />
          
        </StyledBox>
        {isMobileView ? null : <Divider />}
        <Search />
        <CustomButtonWrapper>
          <CustomIcons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
