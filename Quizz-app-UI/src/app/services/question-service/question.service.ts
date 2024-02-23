import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'http://localhost:8080/questions'; 

  constructor(private http: HttpClient) {}

  addQuestion(questionData: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/add`, questionData, { responseType: 'text' as 'json' });
  }
  

  
}
