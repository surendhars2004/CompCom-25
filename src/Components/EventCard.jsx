import React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import '../Styles/events.css'

const Card = ({ eventObj, onReadMore}) => {

  
  return (
    <StyledWrapper bgimage={eventObj.bgImage} color={eventObj.color}>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">{eventObj.title}</span>
            <p className="card-content">{eventObj.description}</p>
            <span className="read-more" onClick={onReadMore}>Read More
              
            </span>
          </div>
          <div className="date-box" dangerouslySetInnerHTML={{ __html: eventObj.icon }}></div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  

  .card {
    
    padding-top: 100px;
    transform-style: preserve-3d;
    background-image: url(${props => props.bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    background-position: center;
    background-color: #f0f0f0;
    width: 100%;
    box-shadow: ${props => props.color} 0px 20px 50px -25px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    background-position: 80% 20%;
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background-color: rgba(0, 0, 0, 0.81);
    /* border-radius: 10px 100px 10px 10px; */
    transition: all 0.5s ease-in-out;
    padding: 50px 25px 25px 25px;
    transform-style: preserve-3d;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
  }

  .content-box .card-title {
    font-family: 'Orbitron', sans-serif;
    display: inline-block;
    color: white;
    font-size: 20px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;      /* Prevents text from wrapping */
    overflow: hidden;         /* Hides overflowing text */
    text-overflow: ellipsis;
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 20px;
    font-size: 14px;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .read-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 10px;
    text-transform: uppercase;
    color: ${props => props.color};
    /* border-radius: 5px; */
    padding: 0.5rem 0.7rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
  }

  .content-box .read-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 75px;
    right: 30px;  
    height: 60px;
    width: 60px;
    background: white;
    /* border-radius: 10px; */
    padding: 10px;
    transform: translate3d(0px, 0px, 80px);
     box-shadow: ${props => props.color} 0px 20px 60px 0px, rgb(0, 200, 255) 0px 18px 36px -18px;
    background-color: #000000;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:25px;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

`;

export default Card;