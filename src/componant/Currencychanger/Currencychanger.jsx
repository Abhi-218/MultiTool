import React, { useEffect, useState } from "react";
import CCinputbox from "./ccinputbox";
import { Helmet } from "react-helmet";

const Currencychanger = () => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState([]);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.20/v1/currencies.json`
        );
        const json = await res.json();
        setOptions(Object.keys(json));
      } catch (err) {
        console.error("Failed to fetch currency list", err);
      }
    }
    fetchCurrencies();
  }, []);

  useEffect(() => {
    async function fetchConversionRates() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.20/v1/currencies/${from}.json`
        );
        const json = await res.json();
        setData(json[from]);
      } catch (err) {
        console.error("Failed to fetch conversion rates", err);
      }
    }

    fetchConversionRates();
  }, [from]);

  useEffect(() => {
    if (data && data[to] && amount >= 0) {
      const result = amount * data[to];
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, to, data]);

  const swap = (e) => {
    e.preventDefault();
    const prevFrom = from;
    setFrom(to);
    setTo(prevFrom);
  };

  return (
      <form className="w-full max-w-xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-6">
    <Helmet>
  <title>Currency Converter - Multi Tool</title>
  <meta
    name="description"
    content="Free online currency converter tool. Convert between different currencies quickly and easily."
  />
  <meta name="keywords" content="currency converter, money converter, exchange rates, online converter" />
</Helmet>

        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
          💱 Currency Converter
        </h1>

        <CCinputbox
          label="From"
          currencyOptions={options}
          amount={amount}
          onAmountchange={(val) => setAmount(val)}
          onCurrencyChange={(val) => setFrom(val)}
          selectCurrency={from}
        />

        <div className="flex justify-center">
          <button
            onClick={swap}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-transform transform hover:rotate-180"
            title="Swap currencies"
          >
              <span className="text-xl">🔁</span>
          </button>
        </div>

        <CCinputbox
          label="To"
          amountDisable
          currencyOptions={options}
          amount={convertedAmount}
          onCurrencyChange={(val) => setTo(val)}
          selectCurrency={to}
        />
      </form>

  );
};

export default Currencychanger;
