import React, { useState, useEffect } from 'react';
import compcomlogo3 from '../Images/logo1.png';
import '../Styles/events.css';
import RegisterButton from '../Components/RegisterButton';
import Events from './Events';
import '../Styles/events.css';

function Home() {
  const [year, setYear] = useState(1);
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00',
  });

  useEffect(() => {
    if (year < 25) {
      const interval = setInterval(() => {
        setYear((prevYear) => prevYear + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [year]);

  const targetDate = new Date('April 3, 2025 00:00:00').getTime(); 

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const mins = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const secs = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

        return { days, hours, mins, secs }; 
      } else {
        return { days: '00', hours: '00', mins: '00', secs: '00' }; 
      }
    };

    setCountdown(updateCountdown()); 
    const interval = setInterval(() => {
      setCountdown(updateCountdown()); 
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]); 

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('register');
    if (target) {
      const start = window.pageYOffset;
      const end = target.offsetTop;
      const duration = 1500;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
      <div className='bg'>
        <img src="https://png.pngtree.com/background/20250104/original/pngtree-d-cad-rendering-of-central-computer-processor-cpu-gpu-ai-artificial-picture-image_15587909.jpg" alt="" className="bg-img-1" />

        <div className="main-content">
          <img src={compcomlogo3} alt="" className="compcomlogo3" />
          <h1 className="title-text">CompCom {year}</h1>
          <p className="desc">
            A National Level Technical Symposium will be conducted by Department Of Electronics and Communication Engineering, Government College Of Engineering, Salem.
          </p>

          <div className="countdown-container">
            <div className="countdown-item">
              <div className="countdown-number">{countdown.days}</div>
              <div className="countdown-label">Days</div> 
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{countdown.hours}</div>
              <div className="countdown-label">Hours</div> 
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{countdown.mins}</div>
              <div className="countdown-label">Mins</div> 
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{countdown.secs}</div>
              <div className="countdown-label">Secs</div> 
            </div>
          </div>

          <a href="#register" className="button-container" onClick={handleRegisterClick}>
            <RegisterButton />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;