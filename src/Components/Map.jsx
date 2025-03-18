import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7813.452157125611!2d78.0871333!3d11.7138032!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3babfb568f8493bb%3A0x2272d8cbb6f0112d!2sGCE%20SALEM%20%2CECE%20DEPARTMENT.%20ECE%20Department%20Govt%20Engineering%20College%20Campus%20Karuppur%2C%20Salem%2C%20Tamil%20Nadu%20636011!3m2!1d11.7138032!2d78.08713329999999!5e0!3m2!1sen!2sin!4v1742227354940!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 340px;
    height: 200px; /* Adjusted height to fit map */
    background-color: #0b0b0b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center the map */
    position: relative;
    border-radius: 15px;
    text-align: center;
    padding: 0; /* Remove padding */
    transition:0.3s;
    
  }

  .card:hover{
    transorm:scale(1.05);
  }

  .card::before {
    content: '';
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 15px;
    left: -4px;
    top: -4px;
    background: linear-gradient(90deg, rgb(156, 33, 194), rgb(59, 177, 255));
    z-index: -1;
  }

  .map-container {
    width: 100%;
    height: 100%; /* Match card height */
    border-radius: 15px; /* Remove border radius */
    overflow: hidden;
    border:6px solid #000;
  }

@media(max-width:400px){
    .card {
        width: 80vw;
    }
}  
  `;

export default Card;