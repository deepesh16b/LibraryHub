import styled from "@emotion/styled";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const ImageURL = [
  "https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:820:460:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2F8D2944388FGroup_1171279747.png",
  "https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:820:460:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2FCCDFA37E6EGroup_1171279748.png",
  "https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:820:460:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2F5836609E7CGroup_1171279749.png",
];

const Wrapper = styled(Grid)`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const Image = styled("img")(({ theme }) => ({
  display: "flex",
  marginTop: 10,
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 130,
  },
}));
export const MidSection = () => {
  const theme = createTheme();
  const url =
    "https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:2560:480:0/gravity:sm/plain/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fbookscape-s3-bucket%2FDBFE1F236DStatic_Banner_1.png";

  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper lg={12} sm={12} md={12} container>
          {ImageURL.map((image) => (
            <Grid item lg={4} md={4} sm={12}>
              <img src={image} alt="" style={{ width: "98%" }} />
            </Grid>
          ))}
        </Wrapper>
        <Image src={url} />
      </ThemeProvider>
    </>
  );
};
