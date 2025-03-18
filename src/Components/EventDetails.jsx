import React from 'react';
import styled from 'styled-components';
import { FaListUl, FaPuzzlePiece, FaTimes } from 'react-icons/fa'; // Close icon added

function EventDetails({ event, onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes size={20} />
        </CloseButton>
        
        <h2>{event.title}</h2>
        <p>{event.desc}</p>

        {event.rules && event.rules.length > 0 && (
          <Section>
            <h3>
             Rules:
            </h3>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </Section>
        )}

        {event.rounds && event.rounds.length > 0 && (
          <Section>
            <h3>
             Rounds:
            </h3>
            <ul>
              {event.rounds.map((round, index) => (
                <li key={index}>{round}</li>
              ))}
            </ul>
          </Section>
        )}
        {event.submission && event.submission.length > 0 && (
          <Section>
            <h3>
             Submission:
            </h3>
            <ul>
              {event.submission.map((round, index) => (
                <li key={index}>{round}</li>
              ))}
            </ul>
          </Section>
        )}

        <StyledCloseButton onClick={onClose}>Close</StyledCloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: rgba(28, 28, 28, 0.9);
  backdrop-filter: blur(12px);
  color: #e0e0e0;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  position: relative;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  scrollbar-width: none;
  max-height: 85vh;
  box-sizing: border-box;

  h2 {
    margin-bottom: 20px;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 24px;
  }

  h3 {
    margin-top: 20px;
    color: #80cbc4;
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
    
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateX(5px);
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #333;
  }
  ::-webkit-scrollbar-thumb {
    background: #00c6ff;
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff3b3b;
  }
`;

const StyledCloseButton = styled.button`
  margin-top: 30px;
  padding: 12px 25px;
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 75, 43, 0.7);
  }
`;

const Section = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

export default EventDetails;
