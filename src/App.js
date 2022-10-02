import React from 'react';
import './App.css'
import Header from './components/Layouts/Header';
import Home from './components/Pages/Home';
import Footer from './components/Layouts/Footer';
function App() {
  return (
    <div className='layout'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
