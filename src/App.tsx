import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';
import Link from './components/Link';
import Create from './components/Create';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='bg-[#F9F9F9]'>
      <Navbar />
      <Link />
      <Calculator />
      <Create />
      <FAQ />
    </div>
  );
}

export default App;
