
import React from 'react';
import '../Styles/workshop.css';
import WorkshopCard from '../Components/WorkshopCard' // Import the new Card component

function Workshop() {
  return (
    <div className="workshop-container">
      <div className="workshop-list">

        <WorkshopCard title="Smart Embedded Systems: AI-Powered Solutions with STM32 and Nano Edge AI" paragraph="This workshop is designed for students, eager to explore the world of AI-driven embedded systems. Using STM32 Microcontrollers and Nano Edge AI, participants will learn how to integrate machine learning models into embedded devices for real-time decision-making and automation."
          listItems={[
            'Embedded Systems Fundamentals: Understanding the core principles of microcontroller-based systems.',
            'STM32 Hardware Setup: Getting started with STM32 boards and their peripherals.',
            'Peripheral Interfacing: Working with sensors and actuators.',
            'Introduction to Nano Edge AI: Overview of AI-driven embedded solutions.',
            'AI Model Training & Deployment: Implementing machine learning models on microcontrollers.',
            'Real-Time Decision-Making: Developing AI-powered embedded applications.',
            'Hands-on Session: Participants will gain practical experience in training, optimizing, and deploying AI models on STM32 microcontrollers using Nano Edge AI.',
            'Contact Coordinator: Kingston S - 9488126077 ',
            // ... (rest of your list items) ...
          ]}
          buttonText="Register Now" primarycolor="hsl(189, 92%, 58%)" // Blue theme
        />


        <WorkshopCard  title="Microstrip Patch Antenna Design"  paragraph="This hands-on workshop on Microstrip Patch Antenna Design is designed for students interested in RF and antenna engineering. Using Ansys HFSS, a leading electromagnetic simulation tool, participants will learn the fundamental concepts of antenna design, simulation, and performance optimization."
          listItems={[
            'Antenna Basics: Understanding fundamental principles of antennas.',
            'Design Parameters: Key factors affecting antenna performance.',
            'Introduction to HFSS: Overview of Ansys HFSS and its interface.',
            'Simulation Steps: Step-by-step guidance on designing antennas in HFSS.',
            'Performance Analysis: Evaluating key metrics like return loss, gain, and efficiency.',
            'Optimization Techniques: Improving antenna characteristics through design modifications.',
            'Substrate Selection: Material & properties',
            'Boundary Conditions: HFSS setup',
            'Hands-on Session:Participants will gain practical experience by designing and simulating different microstrip patch antennas using Ansys HFSS.',
            'Contact Coordinator: NavinKumar S - 6374248910',
            // ... (rest of your list items) ...
          ]}
          buttonText="Register Now"  primarycolor="hsl(266, 92%, 58%)" // Violet theme
        />

      </div>
    </div>
  );
}

export default Workshop;