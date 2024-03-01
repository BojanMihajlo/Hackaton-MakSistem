import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import UserContext from "../context/user-context";
import { useContext } from "react";

const AssetPlatforms = () => {
  const userContext = useContext(UserContext);

  const setData = (data) => {
    userContext.setNewFromSearch(data || []);
    userContext.setStateAsset(true);
  };

  return (
    <Grid sx={{ backgroundColor: "#d5f5ef", paddingTop: "4%" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ marginTop: { md: "8%", xs: "20%" }, marginBottom: "2%" }}
        >
          Asset Platforms
        </Typography>

        <Box>
          <Autocomplete
            disablePortal
            options={userContext.searchAsset}
            getOptionLabel={(options) => (options.name ? options.name : "")}
            onChange={(event, value) => setData(value)}
            sx={{
              width: { md: 350, xs: 250 },
              backgroundColor: "#dff7e0",
              borderRadius: "10px",
              border: "4px solid green",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search asset" />
            )}
          />
        </Box>

        {userContext.stateAsset ? (
          <Box>
            <Box
              key={userContext.newFromSearch.id}
              sx={{
                backgroundColor: "#38c79f",
                borderRadius: "10px",
                padding: "1%",
                margin: "1% 0",
              }}
            >
              <Grid>
                <Typography variant="h5">
                  {userContext.newFromSearch.name}
                </Typography>
                <Typography>
                  native coin:{userContext.newFromSearch.native_coin_id}
                </Typography>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box>
            {userContext.assetPlatforms.map((platforms, index) => {
              return (
                <Box
                  key={platforms.id}
                  sx={{
                    backgroundColor: "#38c79f",
                    borderRadius: "10px",
                    padding: "1%",
                    margin: { md: "1% 0", xs: "2% 0" },
                  }}
                >
                  <Grid>
                    <Typography variant="h5">{platforms.name}</Typography>
                    <Typography>
                      native coin:{platforms.native_coin_id}
                    </Typography>
                  </Grid>
                </Box>
              );
            })}
            <Box sx={{ textAlign: "center", padding: "2%" }}>
              <Button
                sx={{ backgroundColor: "#26abbc", color: "black" }}
                onClick={userContext.handleAssetPlatforms}
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
          </Box>
        )}
      </Container>
    </Grid>
  );
};

export default AssetPlatforms;
