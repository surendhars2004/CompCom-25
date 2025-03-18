import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src="https://uiverse.io/astronaut.png" alt="" className="image" />
        <div className="heading">We're on Social Media</div>
        <div className="icons">
          <a href="https://www.instagram.com/compcom25?igsh=MTFmaWg5ZXdmM3ph" className="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>
          <a href="mailto:compcom202125@gmail.com" className="x">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
            </svg>
          </a>
          <a href="tel:+917395838806" className="discord">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 340px;
    height: fit-content;
    background-color: #0b0b0b;
    display: flex;
    align-items: center;
    padding: 10px;
    position: relative;
    border-radius: 15px;
    transition:0.3s;
  }

  .card:hover{
    transform:scale(1.05);
  }
  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 190px;
    border-radius: 15px;
    padding: 4px;
    left: -4px;
    background: linear-gradient(90deg, rgb(156, 33, 194), rgb(59, 177, 255));
    z-index: -1;
  }

  .card .image {
    width: 170px;
    height: 170px;
    margin-right: 15px;
    animation: moving 5s infinite;
  }

  .heading {
    color: white;
    font-weight: 900;
    height: fit-content;
    width: 100%;
    position: relative;
    top: -50px;
    font-size: 20px;
  }

  .icons {
    position: absolute;
    display: flex;
    height: 50px;
    width: 42%;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    right: 43px;
    background-color: rgb(43, 43, 43);
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
  }

  .icons a {
    padding: 10px;
    padding-top: 15px;
    position: relative;
    z-index: 4;
  }

  .icons a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 55px;
    z-index: -1;
    left: 0px;
    top: 0px;
    opacity: 0;
    transition: 0.1s;
  }

  .icons a:hover::before {
    opacity: 1;
  }

  .icons .instagram::before {
    background: linear-gradient(120deg, #833ab4, #fd1d1d, #fcb045);
  }

  .icons .x::before {
    background-color: black;
  }

  .icons .discord::before {
    background-color: rgb(0, 102, 255);
  }

  .icons svg {
    color: rgb(243, 243, 243);
    width: 27px;
    height: 27px;
    z-index: 99;
  }
    
  @media(max-width:400px){
    .card {
        width: 80vw;
    }
    .heading {
    font-size: 16px;
    }
    .icons {

    }
    
}  `;

export default Card;
