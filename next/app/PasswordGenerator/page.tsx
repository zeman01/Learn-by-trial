"use client";
import React, { useCallback, useState } from "react";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

const Password = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
    setCopied(false);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };


//   ? strength meter function
//   const getStrength = () => {
//     if (length >= 14 && numberAllowed && charAllowed) return "Strong";
//     if (length >= 10 && (numberAllowed || charAllowed)) return "Medium";
//     return "Weak";
//   };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 p-6 rounded-xl shadow-xl text-white mt-10 border border-gray-700">
      <h1 className="text-2xl font-bold text-center mb-6">
        Password Generator
      </h1>

      {/* Input + Copy + Show */}
      <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden mb-4">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          readOnly
          className="w-full px-3 py-2 bg-transparent outline-none"
          placeholder="Your password will appear here..."
        />
        <button
          onClick={() => setShowPassword((prev) => !prev)}
          className="px-3 bg-gray-700 hover:bg-gray-600"
        >
          {showPassword ? <BiShow/> : <GrHide/>}
        </button>
        <button
          onClick={copyToClipboard}
          className="px-4 bg-blue-600 hover:bg-blue-700"
        >
          {copied ? "✔️" : "Copy"}
        </button>
      </div>

      {/* Strength Meter */}
      {/* {password && (
        <p
          className={`text-sm font-semibold mb-4 ${
            getStrength() === "Strong"
              ? "text-green-400"
              : getStrength() === "Medium"
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          Strength: {getStrength()}
        </p>
      )} */}

      {/* Controls */}
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.valueAsNumber)}
            className="cursor-pointer w-full"
          />
          <span className="font-medium">Length: {length}</span>
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          Include Numbers (0-9)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          Include Symbols (!@#$...)
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
      >
        Generate Password
      </button>
    </div>
  );
};

export default Password;
