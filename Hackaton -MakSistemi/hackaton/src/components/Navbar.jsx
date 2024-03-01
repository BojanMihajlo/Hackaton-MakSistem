import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import UserContext from "../context/user-context";
import { useContext, useState } from "react";

const Navbar = () => {
  const userContext = useContext(UserContext);

  const pages = [
    { name: "Home", url: "/", show: userContext.checkEmailLogin },
    {
      name: "Asset Platforms",
      url: "asset",
      show: userContext.checkEmailLogin,
    },
    {
      name: "Cryptocurrencies",
      url: "cryptocurrencies",
      show: userContext.checkEmailLogin,
    },
    {
      name: "My Coins",
      url: "mycoins",
      show: userContext.checkEmailLogin,
    },
    { name: "Login", url: "login", show: !userContext.checkEmailLogin },
    { name: "Register", url: "register", show: !userContext.checkEmailLogin },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "#17979f" }}>
        <CurrencyBitcoinIcon
          sx={{ fontSize: "40px", display: { xs: "none", md: "flex" } }}
        />
        {userContext.checkEmailLogin && (
          <Typography sx={{ padding: "0 1%" }}>
            {" "}
            {userContext.checkUser}
          </Typography>
        )}

        {/* for mobile code  */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <CurrencyBitcoinIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
          >
            {pages
              .filter((page) => page.show)
              .map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink to={page.url}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            {userContext.checkEmailLogin && (
              <MenuItem>
                <Button
                  textAlign="center"
                  onClick={userContext.logoutHandler}
                  sx={{ backgroundColor: "lightgreen" }}
                >
                  Logout
                </Button>
              </MenuItem>
            )}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 0.9 }}></Box>
        <Stack direction="row">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages
              .filter((page) => page.show)
              .map((page) => (
                <NavLink
                  key={page.name}
                  to={page.url}
                  style={({ isActive }) => ({
                    color: "white",
                    textDecoration: isActive ? "underline" : "none",
                    fontSize: "20px",
                    marginRight: "7%",
                  })}
                >
                  {page.name}
                </NavLink>
              ))}
            {userContext.checkEmailLogin && (
              <MenuItem>
                <Button
                  textAlign="center"
                  onClick={userContext.logoutHandler}
                  sx={{ backgroundColor: "lightgreen" }}
                >
                  Logout
                </Button>
              </MenuItem>
            )}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
