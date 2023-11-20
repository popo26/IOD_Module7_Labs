import { useState, useEffect } from "react";
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(0);
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setPrice(json.bitcoin[currency.toLowerCase()]);
        }
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <h4>
        {price}
        {currency}
      </h4>
    </div>
  );
}
