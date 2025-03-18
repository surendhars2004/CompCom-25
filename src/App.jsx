import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Events from './Pages/Events';
import RegisterButton from './Components/RegisterButton';
import Workshop from './Pages/Workshop';
import Register from './Pages/Register';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <div className="app-container">
        <section id="home">
          <Home />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="workshop">
          <Workshop />
        </section>
        <section id="register">
          <Register />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;