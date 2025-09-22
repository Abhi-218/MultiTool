import React, { useCallback, useEffect, useRef, useState } from "react";
import { AdSenseAd } from "./AdSenseAd";

const Password = () => {
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+{}[]:;<>,.?/~`-=";

    let newPass = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      newPass += chars[randIndex];
    }

    setPassword(newPass);
  }, [includeNumbers, includeSymbols, length]);

  useEffect(() => {
    generatePassword();
  }, [includeNumbers, includeSymbols, length, generatePassword]);

  const copyToClipboard = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg text-black">
      <h1 className="text-2xl font-bold text-center mb-6">🔐 Password Generator</h1>

      <div className="flex">
        <input
          type="text"
          value={password}
          readOnly
          ref={passRef}
          className="flex-grow px-3 py-2 text-lg bg-gray-100 rounded-l-md border border-gray-300 outline-none"
        />
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-r-md transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="mt-10 space-y-8 text-sm">
        <div className="flex items-center justify-between">
          <label className="font-medium">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-2/3"
          />
        </div>

        <div className="flex items-center gap-4">
          <input
            id="numbers"
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
          />
          <label htmlFor="numbers" className="cursor-pointer">
            Include Numbers
          </label>

          <input
            id="symbols"
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols((prev) => !prev)}
          />
          <label htmlFor="symbols" className="cursor-pointer">
            Include Symbols
          </label>
        </div>
      </div>

      <AdSenseAd/>
    </div>
  );
};  

export default Password;
