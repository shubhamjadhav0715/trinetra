# Trinetra 🔱
### The Third Eye of Intelligence

Trinetra is an AI-powered chatbot web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and OpenAI API.

Inspired by Lord Shiva's third eye (Trinetra), which symbolizes knowledge, vision, and intelligence, this chatbot helps users interact with an AI assistant capable of understanding questions and generating intelligent responses in real time.

This project demonstrates the integration of Artificial Intelligence with modern full-stack web development technologies.

--------------------------------------------------

# Introduction

The Trinetra AI Chatbot Web Application is a modern web-based conversational system designed to provide intelligent responses to user queries.

Users can interact with the chatbot through a simple chat interface. The chatbot processes user input using OpenAI's language model and generates meaningful responses.

The system also stores chat history and provides a seamless conversational experience.

This platform shows how AI services can be integrated with modern web technologies to create interactive applications.

--------------------------------------------------

# Technology Stack

Frontend  
React.js

Backend  
Node.js  
Express.js

Database  
MongoDB

AI Integration  
OpenAI API

API Communication  
Axios

--------------------------------------------------

# Key Modules & Features

## User Module

- Chat interface for users
- Send messages to chatbot
- Receive AI generated responses
- View conversation history

## Chatbot Engine

- AI powered response generation
- Natural language processing
- OpenAI API integration
- Fast response system

## Chat Management

- Store chat history in database
- Retrieve past conversations
- Manage messages and responses

--------------------------------------------------

# System Architecture

The application follows a three layer architecture.

Frontend Layer  
React.js provides the user interface where users type messages and view chatbot responses.

Backend Layer  
Node.js with Express.js handles API requests and communicates with the OpenAI service.

AI Service Layer  
OpenAI API processes the user message and generates intelligent responses.

Database Layer  
MongoDB stores chat messages and conversation history.

Flow:

User → React UI → Node.js Server → OpenAI API → Response → MongoDB → Display Response

--------------------------------------------------

# Project Workflow

Step 1  
User types a message in the chat interface.

Step 2  
React sends the message to the backend API.

Step 3  
Backend processes the request.

Step 4  
Message is sent to OpenAI API.

Step 5  
OpenAI generates an AI response.

Step 6  
Backend returns response to frontend.

Step 7  
Response is displayed to user and stored in database.

--------------------------------------------------

# Features

- AI powered chatbot
- Real time chat interface
- OpenAI API integration
- Chat history storage
- Responsive UI
- Secure API configuration

--------------------------------------------------

# Project Structure

trinetra-ai-chatbot

client/
    src/
    public/
    package.json

server/
    server.js
    routes/
    models/

README.md

--------------------------------------------------

# Installation

1 Clone Repository

git clone https://github.com/yourusername/trinetra-ai-chatbot.git

cd trinetra-ai-chatbot

--------------------------------------------------

# Install Backend

cd server  
npm install  

Run backend server

node server.js

Server runs on

http://localhost:5000

--------------------------------------------------

# Install Frontend

Open new terminal

cd client  
npm install  
npm start  

Frontend runs on

http://localhost:3000

--------------------------------------------------

# Environment Variables

Create a .env file in server folder

OPENAI_API_KEY=your_openai_api_key

--------------------------------------------------

# API Endpoint

POST /chat

Request

{
 "message": "Hello"
}

Response

{
 "reply": "Hello! How can I help you?"
}

--------------------------------------------------

# Future Enhancements

- Voice based chatbot
- Multi language support
- User authentication
- Chat export feature
- AI analytics dashboard

--------------------------------------------------

# Conclusion

Trinetra provides an intelligent AI chatbot platform that allows users to interact with artificial intelligence through a web interface.

By combining MERN stack technologies with OpenAI API, the project demonstrates how developers can build smart AI driven web applications.

This project provides hands-on experience in AI integration, full stack development, and real time communication systems.

--------------------------------------------------

# Author

Shubham  
MERN Stack Developer
