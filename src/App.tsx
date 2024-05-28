import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/NavBar/Hero/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
