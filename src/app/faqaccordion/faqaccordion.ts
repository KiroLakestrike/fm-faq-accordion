import { Component } from '@angular/core';
import { QuestionComponent } from "../question/question";

@Component({
  selector: 'app-faqaccordion',
  imports: [QuestionComponent],
  templateUrl: './faqaccordion.html',
  styleUrl: './faqaccordion.scss',
})
export class FAQAccordion {}
