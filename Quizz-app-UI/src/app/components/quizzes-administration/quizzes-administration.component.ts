import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-quizzes-administration',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule],
  templateUrl: './quizzes-administration.component.html',
  styleUrl: './quizzes-administration.component.css'
})
export class QuizzesAdministrationComponent {
   // Function to handle creating a new question
   addQuestion() {
    // Implementation logic
    console.log('Create Question');
  }

  // Function to view all questions
  seeAllQuestions() {
    // Implementation logic
    console.log('See All Questions');
  }

  // Function to view questions by category
  seeQuestionsByCategory() {
    // Implementation logic
    console.log('See Questions by Category');
  }

  // Function to update a question
  updateQuestion() {
    // Implementation logic
    console.log('Update Question');
  }

  // Function to delete a question
  deleteQuestion() {
    // Implementation logic
    console.log('Delete Question');
  }

  // Function to create a new quiz
  createQuiz() {
    // Implementation logic
    console.log('Create Quiz');
  }

  // Function to see quizzes by category
  seeQuizzesByCategory() {
    // Implementation logic
    console.log('See Quizzes by Category');
  }

  // Function to update a quiz
  updateQuiz() {
    // Implementation logic
    console.log('Update Quiz');
  }

  // Function to delete a quiz
  deleteQuiz() {
    // Implementation logic
    console.log('Delete Quiz');
  }
}
