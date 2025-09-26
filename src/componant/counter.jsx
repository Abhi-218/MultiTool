import { useState } from "react";
import { Helmet } from "react-helmet";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [bgColor, setBgColor] = useState("bg-orange-300");

  const randomColor = () => {
    const colors = [
      "bg-orange-300",
      "bg-yellow-300",
      "bg-pink-300",
      "bg-green-300",
      "bg-blue-300",
      "bg-purple-300",
      "bg-rose-300",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const up = () => {
    setCounter((prev) => prev + Number(step));
    setBgColor(randomColor());
  };

  const down = () => {
    setCounter((prev) => (prev - Number(step) >= 0 ? prev - Number(step) : 0));
    setBgColor(randomColor());
  };

  const reset = () => {
    setCounter(0);
    setBgColor("bg-orange-300");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl text-center space-y-6">
      <Helmet>
        <title>
          Online Counter - Multi Tool Three | Simple Digital Counter
        </title>
        <meta
          name="description"
          content="Use Multi Tool Three's free Online Counter tool to count numbers, track events, or manage repetitions. Simple, fast, and accurate digital counter."
        />
        <meta
          name="keywords"
          content="counter, online counter, digital counter, tally counter, multi tool three"
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800">⚙️ Creative Counter</h1>

      <div
        className={`text-4xl font-extrabold text-gray-900 py-4 px-8 rounded-full shadow-md transition-all duration-300 inline-block ${bgColor}`}
      >
        {counter}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={down}
          className="bg-red-500 hover:bg-red-600 text-white text-xl font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          - Down
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white text-xl font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          🔄 Reset
        </button>
        <button
          onClick={up}
          className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          + Up
        </button>
      </div>

      <div className="flex justify-center items-center gap-3 mt-4 text-lg">
        <label htmlFor="step" className="font-semibold text-gray-700">
          Step:
        </label>
        <input
          id="step"
          type="number"
          min="1"
          max="20"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          className="border px-3 py-1 rounded-md text-center w-20 outline-none shadow-inner"
        />
      </div>

      {counter === 0 && (
        <p className="text-sm text-red-500 font-medium">
          Counter cannot go below 0 🚫
        </p>
      )}
    </div>
  );
};

export default Counter;
