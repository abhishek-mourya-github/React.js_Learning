import React from 'react';
import './App.css'
import ThemeContextProvider from './context/ThemeContextProvider';
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <ThemeContextProvider>
      <ThemeButton />
      <Card />
    </ThemeContextProvider>
  )
}

export default App
