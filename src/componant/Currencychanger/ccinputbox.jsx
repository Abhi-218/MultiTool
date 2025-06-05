import React, { useId } from "react";

const CCinputbox = ({
  label,
  amount,
  onAmountchange,
  onCurrencyChange, // ✅ Fix naming to match parent
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId();
  const selectId = useId();

  return (
    <div className="w-full bg-white flex justify-between p-5 rounded-lg z-0">
      {/* Amount Input Section */}
      <div className="flex flex-col gap-3 w-1/2">
        <label htmlFor={amountInputId}>{label || "Amount"}</label>
        <input
          id={amountInputId}
          type="number"
          min={0}
          className="bg-slate-100 text-xl p-2 rounded-md shadow-inner outline-none focus:ring-2 focus:ring-indigo-400 transition"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Dropdown */}
      <div className="flex flex-col items-end gap-3">
        <label htmlFor={selectId}>Currency</label>
        <select
          id={selectId}
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
          className="bg-slate-100 text-xl p-2 rounded-md shadow-inner outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          {currencyOptions.map((currencyName) => (
            <option key={currencyName} value={currencyName}>
              {currencyName.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CCinputbox;
