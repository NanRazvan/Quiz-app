import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartQuizzComponent } from './components/start-quizz/start-quizz.component';
import { QuizzesAdministrationComponent } from './components/quizzes-administration/quizzes-administration.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartQuizzComponent, QuizzesAdministrationComponent, MatButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})

export class AppComponent {
  title = 'Quizz-app';
}
