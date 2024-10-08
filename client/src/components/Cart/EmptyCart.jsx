import { Typography, Box, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "65vh",
  background: "#fff",
  margin: "80px 140px",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    height: "65vh",
    background: "#fff",
    margin: "150px 10px",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")(({ theme }) => ({
  width: "25%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
   
  },
}));

const StyledButton = styled(Button)`
  display: flex;
  margin: 20px auto;
  background: #00B560;
  color: #fff;
  border-radius: 2px;
  width: 200px;
  height: 45px;
`;
const EmptyCart = () => {
  const imgUrl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <Image src={imgUrl} />
        <Typography>Your cart is empty!</Typography>
        <Typography component="span">Add items to it now.</Typography>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <StyledButton variant="contained">Continue Shopping</StyledButton>
        </Link>
      </Container>
    </Component>
  );
};

export default EmptyCart;
