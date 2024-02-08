import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { StartQuizzModalComponent } from './start-quizz-modal/start-quizz-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-start-quizz',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatDialogModule ],
  templateUrl: './start-quizz.component.html',
  styleUrl: './start-quizz.component.css'
})
export class StartQuizzComponent {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(StartQuizzModalComponent, {
      width: '40%', 
      height: '50%'
    });

    // You can optionally handle modal close actions here
    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The modal was closed');
      // Handle any actions after the modal is closed
    });
  }

  
}
