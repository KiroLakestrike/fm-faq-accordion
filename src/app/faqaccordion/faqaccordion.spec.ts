import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQAccordion } from './faqaccordion';

describe('FAQAccordion', () => {
  let component: FAQAccordion;
  let fixture: ComponentFixture<FAQAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(FAQAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
