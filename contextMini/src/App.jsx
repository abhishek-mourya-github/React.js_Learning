import React from 'react';
import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider';
import Loggin from './components/Loggin';
import Profile from './components/Profile';

function App() {
  
  return (
    <UserContextProvider>
      <h1>Hello, Abhishek Mourya</h1>
      <Loggin />
      <Profile />
    </UserContextProvider>
  )
}

export default App
