import React from 'react';
import './App.css'
import UserContextProvider from './context/UserContextProvider';
import Loggin from './components/Loggin';
import Profile from './components/Profile';

function App() {
  
  return (
    <UserContextProvider>
      {/* UserContextProvider ke andar sabhi components ko kar diya matlab sabko global box ka access he */}
      <h1>Hello, Abhishek Mourya</h1>
      <Loggin />
      <Profile />
    </UserContextProvider>
  )
}

export default App
