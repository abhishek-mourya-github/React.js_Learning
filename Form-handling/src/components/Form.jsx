import React from "react";
import { useState } from "react";

const Form = () => {

  const [title, setTitle] = useState('')

  function formHandler(e) {
    e.preventDefault();
    console.log("Form submitted by", title);
    setTitle('')
  }

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <form onSubmit={(e) => formHandler(e)}>
        <input
          className="border-2 border-white text-white mr-2 p-4"
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button className="border-2 border-white text-white p-4">Submit</button>
      </form>
    </div>
  );
};

export default Form;
