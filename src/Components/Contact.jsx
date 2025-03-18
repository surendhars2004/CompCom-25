import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const members = [
    { name: 'Jeblin Aldo D', number: '7395838806' },
    { name: 'Rohith Kumar E B', number: '8220340041' },
    { name: 'Aravind C', number: '7904242754' },
    { name: 'Sharumathi P', number: '7010955391' },
    { name: 'Sowdharsshini M', number: '8778508379' },
  ];

  return (
    <StyledWrapper>
      <div className="card">
        <div className="title">Contact Us</div>
        <div className="content">
          <div className="members">
            {members.map((member, index) => (
              <div key={index} className="member">
                <p>{member.name} : {member.number}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 340px;
    height: fit-content;
    background-color: #0b0b0b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    text-align: center;
    padding: 20px; /* Added padding to card */
    transition:0.3s;
  }

  .card::before {
    content: "";
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 15px;
    left: -4px;
    top: -4px;
    background: linear-gradient(90deg, rgb(156, 33, 194), rgb(59, 177, 255));
    z-index: -1;
  }

  .content {
    width: 100%;
    margin-top: 0px; /* Reduced margin */
  }

  .title {
    font-weight: 600;
    color: white; /* Added text color */
  }

  .members {
    width: 100%;
    padding-left: 20px; /* Reduced padding */
    text-align: left;
    color: white; /* Added text color */
  }

  .member {
    margin-bottom: 5px;
  }
    @media(max-width:400px){
    .card {
        width: 80vw;
    }
}  
`;

export default Card;