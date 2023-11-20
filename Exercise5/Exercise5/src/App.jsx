import "./App.css";
import EmojiContextProvider from "./context/EmojiContext";
import UsernameProvider from "./context/UsernameContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";

export default function App() {
  return (
    <>
      <UsernameProvider>
        <EmojiContextProvider>
          <NavBar />
          {/* <NavBar2 /> */}

          <AppRoutes />
        </EmojiContextProvider>
      </UsernameProvider>
    </>
  );
}
