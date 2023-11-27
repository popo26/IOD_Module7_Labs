// ● Extension: Try to create a custom theme using
// createTheme

import { createTheme } from "@mui/material/styles";

// Reference: https://mui.com/material-ui/customization/theming/
export const pinkTheme = createTheme({
  palette: {
    primary: { main: "#ee68f2", contrastText: "#044714" },
    secondary: { main: "#f6cbf7", contrastText: "#6de3f7" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeight:"900",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
