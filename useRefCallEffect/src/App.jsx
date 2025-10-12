import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Ref hook
  const passwordRef = useRef(null)

  // Callback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    // declare here bcoz we want that at very first password should contain only letters
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (characterAllowed) {
      str = str + "!@#$%^*(){}~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); 
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
    navigator.clipboard.writeText(password)
      .then(() => {
        alert("✅ Password copied to clipboard!");
      })
      .catch(() => {
        alert("❌ Failed to copy!");
      });
  }, [password])

  
  // Effect Hook runs each time whenever the dependecies status changed.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4">
        <h1 className="text-4xl text-center text-white">
        Password Generator
      </h1>
        <div className="flex shadow rounded-lg overflow-hidden mt-5 bg-gray-500">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="text-white bg-blue-400 px-4 py-2 cursor-pointer shrink-0">copy</button>
        </div>
          <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input 
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev)
                }}
                />
                <label>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={characterAllowed}
                id="numberInput"
                onChange={() => {
                    setCharacterAllowed((prev) => !prev)
                }}
                />
                <label>Characters</label>
              </div>
          </div>
      </div>
    </>
  );
};

export default App;