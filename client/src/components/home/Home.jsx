import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
// import { getProducts } from "../../redux/actions/productsAction";
// import { useDispatch, useSelector } from "react-redux";
import { Slide } from "./Slide";
import { MidSlide } from "./MidSlide";
import { MidSection } from "./MidSection";
import { productsData } from "../constant/data";
const Container = styled(Box)(({ theme }) => ({
  padding:' 15px 10px',
  background: '#f1f3f6',
  [theme.breakpoints.down('md')] : {
    padding:' 8px 5px',
  }
}));
const Home = () => {
  // const { loading,products } = useSelector((state) => state.getProducts);
  // console.log(products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);
  const loading = 0;
  const products = productsData;
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide loading={loading} products={products} />
        <MidSection />
        <Slide loading={loading} products={products} title="Bestsellers" timer={false} />
        <Slide loading={loading} products={products} title="Unmissable Deals" timer={false} />
        <Slide loading={loading} products={products} title="Editor's Picks" timer={false} />
        <Slide loading={loading} products={products} title="Action & Adventure" timer={false} />
      </Container>
    </>
  );
};
export default Home;
