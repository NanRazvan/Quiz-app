import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-submit-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-quizz.component.html',
  styleUrl: './submit-quizz.component.css'
})
export class SubmitQuizzComponent {
  responseData!: number;
  totalQuestions!: number;

   constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as { responseData: any, totalQuestions: number };
    
      this.totalQuestions = state.totalQuestions; 
      this.responseData = parseFloat(state.responseData); 
    }
  }

  ngOnInit(): void {
    console.log(this.responseData)
    console.log(this.totalQuestions)
  }
}
