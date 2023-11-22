import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const reducer = (result, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, data: {}, error: action.payload };
    default:
      return {
        ...result,
        loading: false,
      };
  }
};

//+++++++++++++++++++++++++++++++++++++With AXIOS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function BitcoinRatesWithUseReducer() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
    error: "",
  });
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, [currency]);

  return (
    <div className="BitcoinRates" style={{ backgroundColor: "lightcyan" }}>
      <h3>Bitcoin Exchange Rate With useReducer</h3>
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
        {result.loading ? (
          <div>Retrieving result...</div>
        ) : (
          result.data.bitcoin[currency.toLowerCase()]
        )}
        {!result.loading && currency}
        {result.error && result.error}
      </h4>
    </div>
  );
}

//+++++++++++++++++++++++++++++++++++++With FETCH++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// export default function BitcoinRatesWithUseReducer() {
//   const [currency, setCurrency] = useState(currencies[0]);
//   const [result, dispatch] = useReducer(reducer, {
//     loading: true,
//     data: {},
//     error: "",
//   });
//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

//   const options = currencies.map((curr) => (
//     <option value={curr} key={curr}>
//       {curr}
//     </option>
//   ));

//   useEffect(() => {
//     if (url) {
//       fetch(url, {
//         method: "GET",
//         mode: "no-cors",
//       })
//         .then((response) => {
//           response.json();
//         })
//         .then((json) => {
//           dispatch({ type: "FETCH_SCCESS", payload: json });
//         })
//         .catch((error) => {
//           dispatch({ type: "FETCH_ERROR", payload: error.message });
//         });
//     }
//   }, [currency]);

//   return (
//     <div className="BitcoinRates" style={{ backgroundColor: "lightcyan" }}>
//       <h3>Bitcoin Exchange Rate With useReducer</h3>
//       <label>
//         Choose currency:
//         <select
//           value={currency}
//           onChange={(e) => {
//             setCurrency(e.target.value);
//           }}
//         >
//           {options}
//         </select>
//       </label>
//       <h4>
//         {result.loading ? (
//           <div>Retrieving result...</div>
//         ) : (
//           result.data.bitcoin[currency.toLowerCase()]
//         )}
//       </h4>
//       {result.error && <div className="error">{result.error}</div>}
//     </div>
//   );
// }
