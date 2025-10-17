import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "wheat" : "black",
          color: theme === "light" ? "black" : "wheat",
          border: theme === 'light' ? "black" : "white",
        }}
        className="bg-grey-300 flex items-center justify-center"
      >
        <div className="h-[60vh] w-[25vw] ">
          <div className="upper-card h-[50%] w-full flex flex-col items-center justify-center py-2">
            <img
              className="w-fit h-full"
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvcml6b250YWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
              alt="Image"
            />
          </div>
          <div className="lower-card h-[50%] w-full flex flex-col items-center justify-center p-4 border-t-2">
            <h1 className="text-2xl">Abhishek Mourya</h1>
            <h2>Creator</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
