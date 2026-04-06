import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HandleJSON, Questions } from '../handle-json';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.scss',
})

export class QuestionComponent implements OnInit {
  constructor(public handleJSON: HandleJSON,
    private cdr: ChangeDetectorRef
  ) { }

  data: Questions = { questions: [] };
  loading = true;
  error = '';

  onExpandClick(index: number) {
    console.log('Button clicked Index: ', index);
  }


  ngOnInit(): void {
    this.handleJSON
      .getData('assets/data.json')
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (result) => {
          this.data = result;
          console.log('JSON geladen:', result);

        },
        error: (err) => {
          console.error(err);
          this.error = 'Fehler beim Laden der JSON';

        }
      });
  }
}