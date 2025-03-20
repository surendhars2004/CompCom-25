import React from 'react';
import styled from 'styled-components';
import '../Styles/events.css';
import Card from '../Components/EventCard.jsx'; // Assuming your card is called EventCard
import EventDetails from '../Components/EventDetails.jsx'; 
import { useState } from 'react';

import Blue1 from "../Images/Events_Image_Set_1/Blue.png";
import Green1 from "../Images/Events_Image_Set_1/green.jpg";
import Red1 from "../Images/Events_Image_Set_1/red.png";
import Violet1 from "../Images/Events_Image_Set_1/violet.png";
import yellow1 from "../Images/Events_Image_Set_1/yellow.jpg";

/* import Blue2 from "../Images/Events_Image_Set_2/Blue.png";
import Green2 from "../Images/Events_Image_Set_2/green.png";
import Red2 from "../Images/Events_Image_Set_2/red.webp";
import Violet2 from "../Images/Events_Image_Set_2/violet.png"; */

function Events() {

  const [selectedEvent, setSelectedEvent] = useState(null);

  let imageSet1 = {
    yellow:yellow1,
    green: Green1,
    red: Red1,
    violet: Violet1,
  };

/*   let imageSet2 = {
    blue: Blue2,
    green: Green2,
    red: Red2,
    violet: Violet2,
  }; */

  let eventArray = [
    { 
      id: 1,
      title: "Innoverge",
      description: "Build an innovative project showcasing technical expertise, problem-solving, and creativity.",
      icon: `<i class="bi bi-lightbulb-fill"></i>`,
      bgImage: imageSet1.violet,
      color: "rgba(255, 0, 153, 0.93)",
      desc: "This competition is an excellent opportunity for students to present their projects, demonstrate their skills and knowledge, and receive recognition for their efforts. Based upon the abstracts, students will be shortlisted and invited to present their projects in front of the jury. Presentations will be judged on uniqueness, presentation skills, content, and Q&A by a panel of judges.",
      rules: [
        "Maximum of 4 participants in a team.",
        "Project should be based on innovative ideas.",
        "All registered participants must come with project resources.",
        "Each project demonstration will be given 10 minutes."
      ],
      rounds: [],
      submission :["To participate, please submit a one-page abstract of your paper to compcom202125@gmail.com",
        "The email should contain the college name, participants name, their contact details, project title and abstract."
      ]
    },
    { 
      id: 2,
      title: "Tech Frontiers",
      description: "Showcase knowledge and communication skills by presenting a topic with compelling slides.",
      icon: `<i class="bi bi-filetype-ppt"></i>`,
      bgImage: imageSet1.green,
      color: "rgba(0, 255, 8, 0.93)",
      desc: "This event invites participants to present innovative ideas, cutting-edge research, and thought-provoking perspectives in Advanced Technologies in the ECE Domain. Whether you are a student, researcher, or aspiring professional, TechFrontiers provides a platform to challenge norms, inspire change, and showcase your expertise.",
      rules: [
        "Choose a topic from Advanced Technologies in the ECE Domain.",
        "Individual or team (max 3 members).",
        "8-10 slides, 5 minutes.",
        "Formal speech in English.",
        "No plagiarism.",
        "Judges’ decision is final.",
        "Reference link should be placed at the end."
      ],
      rounds: [],
      submission :["To participate, please submit a one-page abstract of your paper to compcom202125@gmail.com",
        "The email should contain the college name, participants name, their contact details, project title and abstract."
      ]
    },
    { 
      id: 3,
      title: "Code Xtreme",
      description: "Solve problems using C and enhance problem-solving through coding challenges.",
      icon: `<i class="bi bi-code-slash"></i>`,
      bgImage: imageSet1.red,
      color: "rgb(255, 94, 0)",
      desc: "Think you have what it takes to conquer the world of coding? CodeXtreme is a fast-paced competition designed to test your programming logic, debugging skills, and implementation efficiency. Whether you're a beginner or an experienced coder, this event will challenge your problem-solving abilities and push your coding expertise to the next level.",
      rules: ["Individual participation only allowed."],
      rounds: [
        "Round 1: Logic & Debugging - Multiple-choice questions on programming concepts, output prediction, and debugging.",
        "Round 2: Code Writing & Implementation - Solve problem statements with correct logic and structure on a computer."
      ],
      submission :[]
    },
    { 
      id: 4,
      title: "Wire Wizards",
      description: "Analyze and debug circuits to identify faults and improve design accuracy.",
      icon: `<i class="bi bi-tools"></i>`,
      bgImage: imageSet1.yellow,
      color: "rgb(255, 247, 0)",
      desc: "Are you ready to put your circuit design skills to the test? Wire Wizards is a high-energy event where participants will tackle electronics challenges, debugging and designing circuits. Whether you are a beginner or an expert, this event will push your problem-solving abilities and creativity to the limit!",
      rules: [
        "Individual participation only allowed",
      ],
      rounds: [
        "Round 1: Circuit Quiz – Participants should answer multiple-choice and conceptual questions on circuit theory, components, and troubleshooting.",
        "Round 2: Debugging Challenging – Identify and fix errors in a faulty circuit within a given time"
      ],
      submission :[]
    },
    { 
      id: 5,
      title: "Enchanted Quest",
      description: "Solve riddles, follow clues, and test problem-solving with teamwork.",
      icon:`<i class="bi bi-cash-coin"></i>`,
      bgImage: imageSet1.violet,
      color: "rgba(255, 0, 153, 0.93)",
      desc: "Embark on an epic adventure with Enchanted Quest, the ultimate treasure hunt event! Get ready to put your sleuthing skills to the test as you and your team search high and low for hidden clues in mysterious locations. With each clue leading to the next, you’ll feel the thrill of the chase as you get closer and closer to uncovering the ultimate treasure. It’s an experience like no other, filled with fun, excitement, and endless possibilities. Let the Enchanted Quest begin!",
      rules: [
        "Maximum of 5 teams.",
        "Team members and time will be decided on the spot.",
        "Follow all instructions from the Play Master.",
        "Strictly stay within designated areas.",
        "No discussion or assistance between teams.",
        "The first team to find the treasure wins."
      ],
      rounds: [],
      submission :[]
    },
    { 
      id: 6,
      title: "Cinemania",
      description: "Prove your film knowledge by tackling trivia questions about movies, stars, and the art of cinema.",
      icon: `<i class="bi bi-camera-reels"></i>`,
      bgImage: imageSet1.green,
      color: "rgba(0, 255, 8, 0.93)",
      desc: "Come, indulge in a cinematic feast for the mind with Cine Feast! This quiz event will put your film knowledge to the test with challenging questions that will separate the true cinephiles from the casual movie-goers. With two rounds and a chance to showcase your solo skills, grab a partner and prepare for a cinematic adventure like no other!",
      rules: [
        "Maximum of 1 participant.",
        "No internet or external help allowed.",
        "Single round competition."
      ],
      rounds: [],
      submission :[]
    },
    { 
      id: 7,
      title: "Sight & Solve",
      description: "Engage in challenging puzzles that test logical thinking and problem-solving.",
      icon: `<i class="bi bi-puzzle"></i>`,
      bgImage: imageSet1.red,
      color: "rgb(255, 94, 0)",
      desc: "Get ready for an exciting challenge of wits and creativity in our Connection game! In this interactive event, participants will be shown a series of pictures, each offering a visual clue. Your task? Combine these images and figure out the connection to uncover the correct answer! The answers could range from famous movie titles to iconic song lyrics, or even popular phrases. Whether you're a trivia enthusiast or just looking for some lighthearted fun, this game will test your observation skills and creativity. Are you ready to connect the dots and solve the puzzle? Join us for an unforgettable experience!",
      rules: [
        "Maximum of 2 participants per team.",
        "No internet or malpractice allowed.",
        "Single round event."
      ],
      rounds: [],
      submission :[]
    },
    { 
      id: 8,
      title: "Visual Extraction",
      description: "Identify famous logos and test brand recognition skills in a fun game.",
      icon: `<i class="bi bi-palette"></i>`,
      bgImage: imageSet1.yellow,
      color: "rgb(255, 247, 0)",
      desc: "Put your observation skills to the test in Logo Finding, an exciting challenge where participants must identify, analyze, and decode various logos from brands, organizations, and industries. This event is designed to test your knowledge of famous logos, their hidden meanings, and brand identities. Whether you're a marketing enthusiast, a design lover, or just someone with a sharp eye for details, this competition is the perfect way to showcase your skills. Get ready to spot the logos and claim victory! ",
      rules: [
        "No murmuring or discussing with other teams is allowed.",
        "No copying or plagiarism of logos will be tolerated.",
        "Teams must work individually to avoid disqualification.",
        "Open to all students.",
        "Teams must consist of two members.",
        "Registration is required prior to the event.",
      ],
      rounds: [],
      submission :[]
    }
];
  
  const handleReadMore = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  
  return (
    <div className="event-container">
      <div className="event-head-text">Tech  Events</div>
      <div className="event-cards">
        {
          eventArray.filter(event => event.id < 5).map(event => (
            <Card key={event.id} eventObj={event} onReadMore={() => handleReadMore(event)} />
          ))
        }
     </div>
      <div className="event-head-text">Non Tech Events</div>
      <div className="event-cards">
        {
          eventArray.filter(event => event.id > 4).map(event => (
            <Card key={event.id} eventObj={event} onReadMore={() => handleReadMore(event)} />
          ))
        }
      </div>
      <div className="event-head-text">Workshops</div>
      {selectedEvent && (
        <EventDetails event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Events;