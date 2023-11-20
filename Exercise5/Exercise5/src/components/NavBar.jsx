import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Menu } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/Cloud";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function NavBar() {
  //   const [anchorEl, setAnchorEl] = useState < null | HTMLElement > (null);
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
                  onClick={handleClick}
                  aria-control={open ? "resources-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  endIcon={<KeyboardArrowDownIcon/>}                
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
                  <MenuItem onClick={handleClose}><NavLink to="/">Home</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to="/bitcoin">Bitcoin</NavLink></MenuItem>
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
