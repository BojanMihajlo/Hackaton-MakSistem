import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
} from "@mui/material";
import UserContext from "../context/user-context";
import { useContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
const Cryptocurrencies = () => {
  const userContext = useContext(UserContext);

  const setData = (data) => {
    userContext.setNewFromCoin(data || []);
    userContext.setCoinState(true);
  };
  const navigate = useNavigate();
  const toMyCoinsHandler = () => {
    navigate("/mycoins");
  };
  const mapsme = userContext.allCoins.map((coin) => coin);
  console.log(userContext.newFromCoin);
  console.log(mapsme);
  return (
    <Grid
      sx={{
        backgroundColor: "#bfd7e3",
        paddingTop: "2%",
        paddingBottom: "20%",
      }}
    >
      <Container>
        <Box sx={{ marginTop: { md: "8%", xs: "14%" }, textAlign: "center" }}>
          <Typography variant="h3">Cryptocurrencies</Typography>
        </Box>

        <Box sx={{ marginTop: "4%", marginLeft: "1%" }}>
          <Autocomplete
            disablePortal
            options={userContext.allCoinSearch}
            getOptionLabel={(options) => (options.name ? options.name : "")}
            onChange={(event, value) => setData(value)}
            sx={{
              width: { md: 350, xs: 250 },
              backgroundColor: "#dff7e0",
              borderRadius: "10px",
              border: "4px solid green",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search coins" />
            )}
          />
        </Box>
        <Box sx={{ textAlign: "right", marginRight: "2%" }}>
          <Button
            onClick={toMyCoinsHandler}
            sx={{ backgroundColor: "#247a94 ", color: "black" }}
          >
            To My Coins
          </Button>
        </Box>

        {userContext.coinState ? (
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "2%",
            }}
          >
            <Box
              id={userContext.newFromCoin.id}
              sx={{
                borderRadius: "10px",
                padding: "1%",
                margin: "1% 0",
                width: "45%",
              }}
            >
              <Grid>
                <Accordion
                  sx={{
                    backgroundColor: "#fcddad",
                    margin: "auto",
                    border: "10px solid #247a94 ",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id={userContext.newFromCoin.id}
                  >
                    <Card sx={{ textAlign: "center" }}>
                      <CardContent>
                        <Box sx={{ display: "flex", gap: "5%" }}>
                          <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={userContext.newFromCoin.image}
                          />
                        </Box>

                        <Typography variant="h6">
                          {userContext.newFromCoin.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h5">
                      Symbol:{userContext.newFromCoin.symbol}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Current price: {userContext.newFromCoin.current_price} eur
                    </Typography>
                    <Typography>
                      Market cap:{userContext.newFromCoin.market_cap}
                    </Typography>

                    <Typography>
                      Rank:{userContext.newFromCoin.market_cap_rank}
                    </Typography>
                    <AccordionActions>
                      <Button
                        sx={{ backgroundColor: "#247a94", color: "white" }}
                        onClick={() =>
                          userContext.saveCoin(userContext.newFromCoin)
                        }
                      >
                        Save
                      </Button>
                    </AccordionActions>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Box>
          </Grid>
        ) : (
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "2%",
            }}
          >
            {userContext.allCoins.map((crypto, index) => {
              return (
                <Box
                  id={crypto.id}
                  sx={{
                    borderRadius: "10px",
                    padding: "1%",
                    margin: "1% 0",
                    width: "45%",
                  }}
                >
                  <Grid>
                    <Accordion
                      sx={{
                        backgroundColor: "#fcddad",
                        margin: "auto",
                        border: "10px solid #247a94 ",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1-content"
                        id={crypto.id}
                      >
                        <Card sx={{ textAlign: "center" }}>
                          <CardContent>
                            <Box sx={{ display: "flex", gap: "5%" }}>
                              <CardMedia
                                component="img"
                                sx={{ width: 100 }}
                                image={crypto.image}
                              />
                            </Box>

                            <Typography variant="h6">{crypto.name}</Typography>
                          </CardContent>
                        </Card>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="h5">
                          Symbol:{crypto.symbol}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          Current price: {crypto.current_price} eur
                        </Typography>
                        <Typography>Market cap:{crypto.market_cap}</Typography>

                        <Typography>Rank:{crypto.market_cap_rank}</Typography>
                        <AccordionActions>
                          <Button
                            sx={{ backgroundColor: "#247a94", color: "white" }}
                            onClick={() => userContext.saveCoin(index, crypto)}
                            disabled={userContext.saveButton === index}
                          >
                            Save
                          </Button>
                        </AccordionActions>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Box>
              );
            })}

            <Box sx={{ marginLeft: { md: "45%", xs: "35%" }, marginTop: "2%" }}>
              <Button
                sx={{
                  backgroundColor: "#26abbc",
                  color: "black",
                }}
                onClick={userContext.handleCoinsPlatforms}
              >
                {userContext.buttonText}
              </Button>
              {userContext.buttonText === "No more text" ? (
                <Button
                  sx={{ backgroundColor: "#2dcbc8", margin: "0 2%" }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Scrool to top
                </Button>
              ) : null}
            </Box>
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default Cryptocurrencies;
