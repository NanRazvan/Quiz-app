import { Component } from '@angular/core';
import { StartQuizzComponent } from '../start-quizz/start-quizz.component';
import { QuizzesAdministrationComponent } from '../quizzes-administration/quizzes-administration.component';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [StartQuizzComponent,QuizzesAdministrationComponent,MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router) { }
  
  navigateToQuizzesAdministration(): void {
    this.router.navigate(['/quizzes-administration']);
  }
}
