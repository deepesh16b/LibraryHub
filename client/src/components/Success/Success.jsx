import { Box, Button, Typography, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import { productsData } from "../constant/data";
const Component = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "auto",
  background: "#fff",
  margin: "80px auto",
  paddingBottom:"40px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    height: "65vh",
    background: "#fff",
    margin: "150px 10px",
  },
}));
const Item = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "25px 15px",
  [theme.breakpoints.down("md")]: {
    margin: "0 ",
    padding: "25px 15px 15px 15px",
    objectFit: "contain",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  marginTop: "5px",
  fontSize: "14px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "11px",
  },
}));
const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: 200,
  maxWidth: 250,
  [theme.breakpoints.down("md")]: {
    height: 135,
    objectFit: "cover",
  },
}));
const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const ImageGif = styled("img")(({ theme }) => ({
  width: "20%",
  [theme.breakpoints.down("sm")]: {
    width: "30%",
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
  "&:hover": {
      backgroundColor: " #00B568",
      color: "#fff",
    },
`;
const Success = () => {
  const handleDownload = () => {
    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1rpjO2_ki9O15LjjwtbP6Nnsr1VtpTjVI";
    window.location.href = downloadUrl;
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ref = searchParams.get("reference");
  const productId = searchParams.get("product_id");
  const product = productsData.find((item) => item.id === productId);
  return (
    <Component>
      <Container>
        <ImageGif src="/success.gif" alt="" />
        <Typography style={{ fontSize: 19, fontWeight: 500, marginBottom: 10 }}>
          Congratulations!
        </Typography>
        <Typography component="span">
          Your Order has been Successfully Placed. <br />Order ID: <span style={{ color: "#0dc043" }}>{ref}</span>
        </Typography>
        <br />
        <br />
        <hr />
        <Item>
          <Image src={product.url} alt="product" />
          <Text style={{ color: "#212121", fontWeight: 600 }}>
            {product.title.shortTitle}
          </Text>
          
        </Item>
        
        <br />
        <Typography
          style={{ fontSize: 17, fontWeight: 500, marginBottom: 10 }}
          component="span"
        >
          You can now download your purchased book using the button below.
        </Typography>
        <br />
        {/* <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}> */}
        <StyledButton
          style={{ textDecoration: "none" }}
          variant="contained"
          onClick={handleDownload}
        >
          Download Your Book
        </StyledButton>
        {/* </Link> */}
       
        <br />
      </Container>
    </Component>
  );
};

export default Success;
