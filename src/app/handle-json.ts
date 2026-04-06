import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Questions {
  questions: QuestionItem[];
}

export interface QuestionItem {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class HandleJSON {
  constructor(private http: HttpClient) { }

  getData(url: string): Observable<Questions> {
    return this.http.get<Questions>(url);
  }
}