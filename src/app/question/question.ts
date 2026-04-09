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

  expandedIndex: number | null = null;


  onExpandClick(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
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
          console.log('JSON full loaded:', result);

        },
        error: (err) => {
          console.error(err);
          this.error = 'Erorr while loading JSON Data';
        }
      });
  }
}