import { useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";
import Emoji from "../components/Emoji";

// Q2 --- Display the current emoji from the BitcoinRates component,
//        and make sure it updates when clicking the ‘Change Mood’
//        button

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRatesPage() {
  const [currency, setCurrency] = useState(currencies[0]);
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
  const data = useGetData(url);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "20px",
        borderRadius: "6px",
      }}
    >
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {options}
        </select>
      </label>
      <h4>
        {data && data.bitcoin[currency.toLowerCase()]}
        {data && currency}
      </h4>
      <Emoji />
    </div>
  );
}
