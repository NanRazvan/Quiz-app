import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../../services/question-service/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-question-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './add-question-modal.component.html',
  styleUrl: './add-question-modal.component.css'
})
export class AddQuestionModalComponent {
  questionForm = new FormGroup({
    questionTitle: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    option1: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    option2: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    option3: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    option4: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    rightAnswer: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    difficultyLevel: new FormControl('Easy', Validators.required),
    category: new FormControl('', Validators.required)
  });

  difficultyLevels = ['Easy', 'Medium', 'Hard'];

  constructor(public dialogRef: MatDialogRef<AddQuestionModalComponent>,
              private questionService: QuestionService,
              private snackBar: MatSnackBar 
    ) {}

    submitQuestion() {
      if (this.questionForm.valid) {
        this.questionService.addQuestion(this.questionForm.value).subscribe({
          next: (response) => {
            this.snackBar.open(response, 'Close', {
              duration: 3000, 
              panelClass: ['snackbar-success']
            });
            this.dialogRef.close();
          },
          error: (error) => {
            // handle error
          }
        });
      }
    }
    
  
  closeDialog() {
    this.dialogRef.close();
  }
}

