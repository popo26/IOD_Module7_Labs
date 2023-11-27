import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Menu } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon
                  color="inherit"
                  id="resources-button"
                  aria-control={open ? "resources-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="resources-menu"
                  anchorEl={anchorEl}
                  open={open}
                  MenuListProps={{
                    "aria-labelledby": "resources-button",
                  }}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/">Home</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/bitcoin">Bitcoin</NavLink>
                  </MenuItem>
                </Menu>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Exercise5
              </Typography>
              <Button color="inherit">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </>
  );
}
