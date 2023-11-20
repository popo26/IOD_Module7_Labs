import "./App.css";
import EmojiContextProvider from "./context/EmojiContext";
import UsernameProvider from "./context/UsernameContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <UsernameProvider>
        <EmojiContextProvider>
          <NavBar />
          <AppRoutes />
        </EmojiContextProvider>
      </UsernameProvider>
    </>
  );
}
