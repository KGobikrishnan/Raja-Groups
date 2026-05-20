import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marichamy from './components/Marichamy';
import RajaMotors from './components/RajaMotors';
import RajaSolar from './components/RajaSolar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Marichamy />
        <RajaMotors />
        <RajaSolar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
