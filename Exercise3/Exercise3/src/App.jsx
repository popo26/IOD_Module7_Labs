import "./App.css";
import EmojiContextProvider from "./context/EmojiContext";
import BitcoinRates from "./components/BitcoinRates";

export default function App() {
  return (
    <>
      <EmojiContextProvider>
        <BitcoinRates/>
      </EmojiContextProvider>
    </>
  );
}
