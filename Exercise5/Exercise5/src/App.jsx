import "./App.css";
import EmojiContextProvider from "./context/EmojiContext";
import UsernameProvider from "./context/UsernameContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import { ThemeProvider } from "@mui/material/styles";
import { pinkTheme } from './themes/pinkTheme';

export default function App() {
  return (
    <>
    <ThemeProvider theme={pinkTheme}>
      <UsernameProvider>
        <EmojiContextProvider>
          <NavBar />
          {/* <NavBar2 /> */}
          <AppRoutes />
        </EmojiContextProvider>
      </UsernameProvider>
      </ThemeProvider>
    </>
  );
}
