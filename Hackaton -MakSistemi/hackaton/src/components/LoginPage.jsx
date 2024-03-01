import {
  Box,
  Paper,
  TextField,
  Stack,
  Typography,
  FormControl,
  Button,
  Grid,
} from "@mui/material";
import UserContext from "../context/user-context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userContext.checkEmailLogin) {
      navigate("/");
    }
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#6d9e7a"
    >
      <Paper elevation={10}>
        <Box
          width={{ md: 400, xs: 200 }}
          bgcolor="background.default"
          borderRadius={5}
          p={10}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "5%" }}
          >
            Login
          </Typography>
          <form>
            <Stack alignItems="center" rowGap={3}>
              <FormControl fullWidth>
                <TextField
                  label="e-mail"
                  value={userContext.loginEmailHandler}
                  onChange={userContext.onChangeLoginEmail}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  value={userContext.loginPasswordHandler}
                  onChange={userContext.onChangeLoginPassword}
                />
              </FormControl>
              <Typography>{userContext.errorMessage}</Typography>
              <FormControl>
                <Button variant="contained" onClick={userContext.loginHandler}>
                  Login
                </Button>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;

// export const loader = () => {
//   const userLoginInfo = localStorage.getItem("isLoggedIn");
//   if (userLoginInfo === "1") {
//     return null;
//   }
// };
