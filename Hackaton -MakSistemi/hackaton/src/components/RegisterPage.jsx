import {
  Box,
  Paper,
  TextField,
  Stack,
  Typography,
  FormControl,
  Button,
} from "@mui/material";

import UserContext from "../context/user-context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userContext.checkUser.length !== 0) {
      navigate("/login");
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
      marginTop={{ md: "1%", xs: "5%" }}
    >
      <Paper elevation={10}>
        <Box
          width={{ md: 400, xs: 200 }}
          bgcolor="background.default"
          borderRadius={5}
          p={{ md: 10, xs: 7 }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "5%" }}
          >
            Register
          </Typography>
          <form>
            <Stack alignItems="center" rowGap={3}>
              <FormControl fullWidth>
                <TextField
                  label="username"
                  value={userContext.usernameHandler}
                  onChange={userContext.onChangeUsername}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="e-mail"
                  value={userContext.emailHandler}
                  type="email"
                  onChange={userContext.onChangeEmail}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  type="password"
                  value={userContext.passwordHandler}
                  onChange={userContext.onChangePassword}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="confirm password"
                  type="password"
                  value={userContext.confirmHandler}
                  onChange={userContext.onChangeConfirm}
                />
              </FormControl>
              <Typography>{userContext.errorMessage}</Typography>
              <FormControl>
                <Button
                  variant="contained"
                  onClick={userContext.registerHandler}
                >
                  Register
                </Button>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
