# QuizzyJava 📝

## Project Description

QuizzyJava is a comprehensive application developed using the Spring Boot framework and enhanced with an Angular TypeScript web interface. This application is designed to facilitate the creation, management, and participation in quizzes, offering a robust platform for both quiz administrators and participants.

### Components

#### 1. Question Management 📚
- Create, edit, and delete questions with ease.
- Organize questions into categories for efficient management.
- Experience real-time updates for a smooth user interface.
- Use modals for adding questions with mandatory fields.
- Employ form validation to maintain data integrity.

#### 2. Quiz Creation 📝
- Generate quizzes using selected questions.
- Customize quizzes according to specific categories or themes.

#### 3. Quiz Taking 🎯
- Engage in quizzes and submit responses.
- Automatically calculate scores upon quiz completion.
- Receive instant feedback on quiz performance.

#### 4. Angular TypeScript Web Interface 🌐
- Enjoy an interactive and responsive web interface for an immersive user experience.
- Benefit from seamless backend integration for dynamic data interaction.
- Navigate easily through a user-friendly design tailored for efficient quiz interaction.

## Backend

The backend supports CRUD (Create, Read, Update, Delete) operations for managing quiz-related data, encompassing:

- **Questions**: Handling of quiz questions.
- **Quizzes**: Creation and administration of quizzes.
- **QuizResponses**: Storage and computation of user responses and scores.

### Table Columns

- **Questions**: `id`, `question_text`, `options`, `correct_answer`, `category`.
- **Quizzes**: `id`, `quiz_name`, `questions`.
- **QuizResponses**: `id`, `quiz_id`, `user_id`, `responses`, `score`.

## Frontend

The frontend, developed using Angular and TypeScript, provides:

- A dynamic and responsive interface for a seamless user experience.
- Intuitive navigation and interactive elements for easy access to various features.
- Real-time interaction with the backend, ensuring up-to-date information and feedback.

## Technologies Used

- **Java**: Primary programming language.
- **Spring Boot**: Framework for creating Java-based applications.
- **Spring Data JPA**: Data access simplification in Spring.
- **RESTful APIs**: Client-server communication.
- **Angular**: Open-source web application framework.
- **TypeScript**: JavaScript superset for large-scale application development.

## Project Setup

Follow these steps to set up the QuizzyJava project on your local environment:

### Prerequisites

- Java (Version 8 or later)
- PostgreSQL (Install and set up a local database server)
- Node.js and npm (For Angular CLI and TypeScript)
- Angular CLI

### Database Setup

1. **Prepare the PostgreSQL Database:**
   - Ensure PostgreSQL is installed and running on your machine.
   - Use the provided SQL query in `Quiz-app/DataBase-QuestionsData.txt` to create and populate the `Questions` table.
   - Configure your database connection settings in the Spring Boot application properties file.

### Backend Setup

1. **Start the Backend Application:**
   - Navigate to the backend application directory: `Quiz-app/QuizzApplication/src/main/java/com/JavaProjects/QuizzApplication`.
   - Run the `QuizzApplication.java` file to start the Spring Boot application.
   - Ensure the application connects successfully to your PostgreSQL database.

### Frontend Setup

1. **Configure and Run the Angular Frontend:**
   - Navigate to the frontend directory: `Quiz-app/Quizz-app-UI`.
   - Run `npm install` to install all the necessary Angular dependencies.
   - Start the Angular application by running `ng serve`.
   - Access the application in your browser at `http://localhost:4200`.

### Verifying the Setup

- Once both the backend and frontend are running, navigate to `http://localhost:4200` in your browser.
- Test the functionality of the application by creating a quiz, adding questions, and taking a quiz.