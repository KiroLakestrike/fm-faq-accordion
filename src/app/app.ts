import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAQAccordion } from "./faqaccordion/faqaccordion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FAQAccordion],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fm-faq-accordion');
}
