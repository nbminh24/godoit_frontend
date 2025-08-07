# Godoit - To-Do List Application

A modern, responsive To-Do List application built with ReactJS. This project was developed as part of an intern test, focusing on clean code, modern UI/UX, and seamless integration with a backend API.

## Backend API

The frontend application connects to a live backend service hosted on Render.

- **API Endpoint:** `https://godoit-backend.onrender.com`

## Features

- **Full CRUD Functionality:**
    - **Create:** Add new tasks.
    - **Read:** View the list of all tasks.
    - **Update:** Mark tasks as completed or uncompleted.
    - **Delete:** Remove tasks from the list.
- **Modern & Responsive UI:**
    - Dark theme with a minimalist, card-based design.
    - Fully responsive layout that works seamlessly on both desktop and mobile devices.
- **Enhanced User Experience (UX):**
    - **Toast Notifications:** Instant feedback for all user actions (add, update, delete, error) using `react-toastify`.
    - **Loading State:** A loading spinner is displayed while fetching initial data.
    - **Empty State:** A friendly message is shown when there are no tasks to display.
    - **Input Validation:** Prevents users from submitting empty tasks and provides a warning.
    - **Disabled State:** The "Add Task" button is disabled during the API request to prevent duplicate submissions.

## Tech Stack

- **ReactJS:** Core library for building the user interface.
- **Axios:** For making HTTP requests to the backend API.
- **React Toastify:** For displaying toast notifications.
- **CSS Modules:** For locally-scoped and component-based styling.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation & Running

1. Clone the repo
   ```sh
   git clone https://github.com/nbminh24/godoit_frontend.git
   ```
2. Navigate to the project directory
   ```sh
   cd godoit
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the app in development mode
   ```sh
   npm start
   ```

The application will be available at `http://localhost:3000`.
