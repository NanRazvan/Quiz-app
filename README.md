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
