# FairPlay App

## Overview

FairPlay is a mobile application designed to educate athletes, coaches, and doctors about anti-doping regulations while providing an interactive platform for engagement. The app features a virtual lobby where users can interact, complete tasks, and access educational resources.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Backend Setup](#backend-setup)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **User Roles**: Supports three user roles: Athlete, Coach, and Doctor.
- **Dashboards**: Each user role has a dedicated dashboard with relevant functionalities:
  - **Athlete Dashboard**: Daily tasks, quizzes, and educational articles.
  - **Coach Dashboard**: Points and badges system to track progress.
  - **Doctor Dashboard**: Feedback submission and access to articles.
- **Virtual Lobby**: An interactive space where users can:
  - Move avatars using arrow keys.
  - Interact with environment elements like gyms and hospitals.
  - Chat with nearby avatars in real-time.

## Technologies Used

- **Frontend**:
  - React Native
  - Expo
  - React Navigation
  - Axios (for HTTP requests)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for data storage)

## Directory Structure
/FairPlayApp
/app
/components
├── Articles.js // Component to display articles
├── Avatar.js // Component for user avatars
├── ChatBox.js // Component for chat functionality
├── DailyTasks.js // Component for daily tasks
├── Environment.js // Component for interactive environment elements
├── Feedback.js // Component for submitting feedback
├── PointsAndBadges.js // Component to display points and badges
├── Quizzes.js // Component for quizzes
└── VirtualLobby.js // Main component for the virtual lobby (if needed)
/screens
├── AthleteDashboard.js // Screen for athlete dashboard
├── CoachDashboard.js // Screen for coach dashboard
├── DoctorDashboard.js // Screen for doctor dashboard
├── HomeScreen.js // Home screen with login functionality
└── VirtualLobbyScreen.js // Main screen for the virtual lobby, integrating components
App.js // Main application file
babel.config.js // Babel configuration file
package.json // Project dependencies and scripts
/backend
index.js // Main backend server file
models/
User.js // Mongoose model for user data
routes/
userRoutes.js // API routes for user-related operations


## Backend Setup

The backend is built using Node.js and Express. It connects to a MongoDB database to store user data. The API provides endpoints for user registration, feedback submission, and retrieving educational content.

### Backend Directory Structure
/backend
index.js // Main backend server file that sets up Express and connects to MongoDB.
models/
User.js // Mongoose model defining the user schema.
routes/
userRoutes.js // API routes handling user-related requests.


### Environment Variables

Create a `.env` file in the `backend` directory with the following content:
MONGODB_URI=mongodb://localhost:27017/fairplaydb // Replace with your MongoDB connection string.
PORT=5000 // Port on which the server will run.


## Installation

1. Clone the repository:
   git clone https://github.com/Akshat394/FairPlayApp.git
   cd FairPlayApp
   
2. Install Dependencies for the front end
   cd app
   npm install

3. Install Dependencies for the back end
   cd ../backend
   npm install
   
5. Running the backend
   cd backend
   
7. Start the server
   node index.js

8. Navigate to the APP
   cd ../app
   
10. LAUNCH THE EXPO APP
    npm start


