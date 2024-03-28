import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryComponent } from './questionary.component';

describe('QuestionaryComponent', () => {
  let component: QuestionaryComponent;
  let fixture: ComponentFixture<QuestionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
