import { Box, styled, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Slide } from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "84%",
  [theme.breakpoints.down('md')]: {
      width: '100%'
  }
}));

const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#FFFFFF",
  width: "16%",
  marginLeft: 10,
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down('md')]: {
      display: 'none'
  }
}));

export const MidSlide = ({ loading, products }) => {
 
  const theme = createTheme();
  const adURL =
    "https://iili.io/dKYbKSj.png";

  return (
    <ThemeProvider theme={theme}>
      <Component>
        <LeftComponent>
          <Slide loading={loading}  products={products} title="Deals of the Day" timer={true} />
        </LeftComponent>
        <RightComponent>
          <img src={adURL} style={{ width: 230 }} alt="ad" />
        </RightComponent>
      </Component>
    </ThemeProvider>
  );
};
