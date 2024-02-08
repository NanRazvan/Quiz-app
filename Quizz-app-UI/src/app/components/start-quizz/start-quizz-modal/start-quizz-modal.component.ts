import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select'; 
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { QuizzService } from '../../../services/quizz.service';

@Component({
  selector: 'app-start-quizz-modal',
  standalone: true,
  imports: [
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './start-quizz-modal.component.html',
  styleUrl: './start-quizz-modal.component.css'
})
export class StartQuizzModalComponent implements OnInit {

  selectedQuizz: any ;
  quizzes: any[] = []; 
  
  constructor(private router: Router,private dialogRef: MatDialogRef<StartQuizzModalComponent>,private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzService.fetchQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  navigateToQuizzPage(): void { 
    console.log("Selected quiz:", this.selectedQuizz);
    this.router.navigate(['/quizz/',this.selectedQuizz.category +'/'+ this.selectedQuizz.title], {
      state: { id: this.selectedQuizz.id }
    });
    this.dialogRef.close(); 
    
  }
}


