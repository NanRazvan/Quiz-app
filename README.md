# QuizzyJava 📝

## Project Description

QuizzyJava is a Java application developed using the Spring Boot framework to facilitate the creation and participation in quizzes. The application offers a user-friendly interface and supports various functionalities to enhance the quiz experience.

### Components

#### 1. Question Management 📚
   - Create, edit, and delete questions seamlessly.
   - Categorize questions for better organization and filtering.
   - Real-time updates ensure a smooth user experience.
   - Modal for adding questions with mandatory fields.
   - Form validation ensures data integrity.

#### 2. Quiz Creation 📝
   - Generate quizzes with selected questions.
   - Customize quizzes based on specific categories or themes.

#### 3. Quiz Taking 🎯
   - Participate in quizzes and submit responses.
   - Calculate scores automatically upon quiz completion.
   - Provide instant feedback on quiz results.

## Backend

The backend supports CRUD operations for managing quiz-related data, including:

- **Questions**: Manage quiz questions.
- **Quizzes**: Create and administer quizzes.
- **QuizResponses**: Store user responses and calculate scores.

### Table Columns

- **Questions**: id, question_text, options, correct_answer, category.
- **Quizzes**: id, quiz_name, questions.
- **QuizResponses**: id, quiz_id, user_id, responses, score.

## Technologies Used

- **Java**: Core programming language.
- **Spring Boot**: Framework for building Java-based applications.
- **Spring Data JPA**: Simplifies data access with JPA in Spring applications.
- **RESTful APIs**: For handling client-server communication.

## Setup Instructions

1. Clone the repository to your local machine.
2. Configure the database settings in the application.properties file.
3. Run the application using your preferred IDE or command line.
4. Access the application through the provided endpoints.

## Usage

1. Navigate to the Question Management section to create, edit, or delete questions.
2. Create quizzes by selecting questions from the available pool.
3. Take quizzes and submit your responses to receive instant feedback.

