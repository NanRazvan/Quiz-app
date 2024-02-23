import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz-service/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: any[] = [];
  category: string = '';

  quizId!: string;

  constructor(private route: ActivatedRoute, private quizzService: QuizzService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as { id: string };
      this.quizId = state.id;
    }
  }

  ngOnInit() {
    this.fetchQuestions();
  }


  fetchQuestions(): void {
    this.quizzService.fetchQuestions(this.quizId).subscribe((questions: any[]) => {
      this.questions = questions;
      
    });
  }

  prepareAnswersForSubmission() {
    return this.questions.map((question, index) => ({
      id: question.id,
      response: this.userAnswers[index]
      
    }));
  }

  submitAnswers(): void {
    this.handleAnswer(this.userAnswers[this.currentQuestionIndex]); 
    
    this.quizzService.submitAnswers(this.quizId, this.userAnswers).subscribe({
      next: (response) => {
        this.router.navigate(['/submit-quizz'], { state: { 
          responseData: response,
          totalQuestions: this.questions.length 
         } });
        
      },
      error: (error) => {
        
        console.error('Submission failed', error);
      }
    });
  }
  

  handleAnswer(selectedAnswer: string): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const answer = {
      id: currentQuestion.id,
      response: selectedAnswer
    };
    this.userAnswers[this.currentQuestionIndex] = answer;
  }

  navigateToNextQuestion(): void {
    this.handleAnswer(this.userAnswers[this.currentQuestionIndex]);
    this.currentQuestionIndex++;
  }
}
