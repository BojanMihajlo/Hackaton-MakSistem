import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import image from "../imagecrypto.jpg";
import UserContext from "../context/user-context";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const userContext = useContext(UserContext);

  return (
    <Grid sx={{ backgroundColor: "#F0EBE4" }}>
      <Box
        sx={{
          marginTop: "4%",
          padding: "4%",
          backgroundImage: `  url(${image}) `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",

          height: "400px",
          filter: "brightness(60%)",
        }}
      ></Box>
      <Typography variant="h4" textAlign="center" sx={{ padding: "2%" }}>
        Top 10 cryptocurrencies
      </Typography>
      <Box>
        <Container>
          {userContext.topTenCrypto.map((crypto, index) => {
            return (
              <Box
                key={crypto.id}
                sx={{
                  backgroundColor: "#247a94",
                  borderRadius: "10px",
                  padding: "1%",
                  margin: "1% 0",
                }}
              >
                <Grid>
                  <Card sx={{ backgroundColor: "#fcddad" }}>
                    <CardContent>
                      <Box sx={{ display: "flex", gap: "5%" }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 100 }}
                          image={crypto.image}
                        />
                        <Typography variant="body1">
                          Symbol:{crypto.symbol}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{ color: "#247a94", fontWeight: "bold" }}
                        >
                          {crypto.name}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: { md: "flex", xs: "block" }, gap: "2%" }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ fontFamily: "Salsa", fontWeight: "bold" }}
                        >
                          Current price: {crypto.current_price}
                        </Typography>
                        <Typography>Market cap:{crypto.market_cap}</Typography>

                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Rank:{crypto.market_cap_rank}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            );
          })}
        </Container>
      </Box>
    </Grid>
  );
};

export default HomePage;
