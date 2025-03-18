import React from 'react';
import styled from 'styled-components';

const Card = ({ title, paragraph, listItems, buttonText, primarycolor }) => {
  const handleRegisterClick = (e) => {
    e.preventDefault(); 
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <StyledWrapper primarycolor={primarycolor}>
      <div className="card">
        <div className="card__border" />
        <div className="card_title__container">
          <span className="card_title">{title}</span>
          <p className="card_paragraph">{paragraph}</p>
        </div>
        <hr className="line" />
        <ul className="card__list">

          {listItems.map((item, index) => (
            <li className="card__list_item" key={index}>
              <span className="check">
                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"  fill="currentColor" className="check_svg">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"/>
                </svg>
              </span>
              <span className="list_text">{item}</span>
            </li>
          ))}

        </ul>
        <a href='#register'onClick={handleRegisterClick} className="button">{buttonText} </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: ${(props) => props.primarycolor};

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    
    width: 29rem;
    max-width: 100%;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, ${(props) => props.primarycolor} 0px, transparent 85%),
      radial-gradient(at 41% 94%, ${(props) => props.primarycolor} 0px, transparent 85%),
      radial-gradient(at 100% 99%, ${(props) => props.primarycolor} 0px, transparent 85%);
    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
    transition: 0.3s;
    
  }

  .card:hover{
    transform:scale(1.05);
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;

    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      ${(props) => props.primarycolor} 40%,
            ${(props) => props.primarycolor} 60%,
    );

    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;

    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%), rotate(0deg);
    transform-origin: left;

    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      ${(props) => props.primarycolor},
      ${(props) => props.primarycolor} 100%
      hsla(0, 0%, 40%, 0) 100%
    );

    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1rem;
    color: var(--white);
    
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;
    width: 98%;

    font-size: 0.6rem;
    color: var(--paragraph);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .card .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .card .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .card .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
    font-weight:100;
  letter-spacing:0.8px;

  }

  .card .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
     ${(props) => props.primarycolor},
      ${(props) => props.primarycolor} 100%
    );

    font-size: 0.75rem;
    color: var(--white);

    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }`;

export default Card;
