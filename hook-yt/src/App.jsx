import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState(false);

  function handleUsername(){
    setUsername(!username);
  }

  return (
    <div>
        <h1>{username ? "Abhishek Mourya" : "Enter Name"}</h1>
        <button onClick={handleUsername}>Click</button>
    </div>
  )
}

export default App    