import { useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
  const data = useGetData(url);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates" style={{backgroundColor:"lightgreen"}}>
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
        {data&&currency}
      </h4>
    </div>
  );
}
