import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // standalone: true
})
export class QuizzService {

  private apiUrl = 'http://localhost:8080/quiz'; 

  constructor(private http: HttpClient) {}

  fetchQuestions(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getById/${id}`);
  }

  fetchQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  submitAnswers(quizId: string, answers: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit/${quizId}`, answers);
  }
}
