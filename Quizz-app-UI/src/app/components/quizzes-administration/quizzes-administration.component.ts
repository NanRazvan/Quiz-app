import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionModalComponent } from './add-question-modal/add-question-modal.component';

@Component({
  selector: 'app-quizzes-administration',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,RouterModule],
  templateUrl: './quizzes-administration.component.html',
  styleUrl: './quizzes-administration.component.css'
})
export class QuizzesAdministrationComponent {

  constructor(private router: Router,public dialog: MatDialog) {}
  
   // Function to handle creating a new question
   addQuestion() {
    this.dialog.open(AddQuestionModalComponent, {
      width: '80%', // Adjust the width as needed
      height: 'auto', // You can specify height or leave it to auto
    });
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
