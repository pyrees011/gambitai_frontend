# GambitAI Frontend

## Overview
GambitAI is an interactive chess helper bot that enables users to play chess and engage in discussions about chess strategies with an AI model. The frontend is built using **Next.js**, **ShadCN**, and **Tailwind CSS**, providing a responsive and engaging user experience.

## Tech Stack
- **Framework**: Next.js
- **UI Components**: ShadCN
- **Styling**: Tailwind CSS
- **Websockets**: realtime transfer of data

## Code Structure
### Code Pattern
In this project, I have utilized Next.js's **pages router** for routing. Each page has a corresponding view located in the **views** directory. Components that are common across the application can be found in the **components** subdirectory within the views folder. This structure helps maintain a clear separation of concerns and enhances code organization.

## Features
- landing page
### pages
    -- /

- User registration and login functionality
### pages
    -- /register and /login

- Interactive chess game interface
### pages
    -- /play

- Real-time chat with the AI bot
### pages
    -- /play

- Game history tracking and home page
### pages
    -- /home

- Responsive design for seamless use on various devices

## Code Quality Tools
To maintain high code quality and consistency, the following tools are utilized:
- **ESLint**: For identifying and fixing issues in JavaScript code
- **Prettier**: For automatic code formatting
- **Pre-commit Hooks**: To ensure code quality checks are run before commits

To run code quality checks and formatting, use the following commands:
```bash
# Check code quality
npm run lint

# Format code
npm run format
```

# Getting Started

Follow these steps to set up the GambitAI backend locally:

## Clone the Repository

```bash
git clone https://github.com/pyrees011/gambitAi_frontend.git
```

## install dependencies

```bash
npm install
```

## run the client
```bash
npm run dev
```