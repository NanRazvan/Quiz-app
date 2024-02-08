
import { Routes } from '@angular/router';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StartQuizzComponent } from './components/start-quizz/start-quizz.component';
import { QuizzesAdministrationComponent } from './components/quizzes-administration/quizzes-administration.component';
import { SubmitQuizzComponent } from './components/submit-quizz/submit-quizz.component';

export const routes: Routes = [
  // Other routes...
  { path: '', component: HomePageComponent },
  { path: 'quizz/:title', component: QuizzComponent } ,
  { path: 'start-quizz', component: StartQuizzComponent},
  { path: 'quizzes-administration', component: QuizzesAdministrationComponent},
  { path: 'submit-quizz', component: SubmitQuizzComponent },

];
