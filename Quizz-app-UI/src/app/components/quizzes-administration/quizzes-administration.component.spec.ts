import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesAdministrationComponent } from './quizzes-administration.component';

describe('QuizzesAdministrationComponent', () => {
  let component: QuizzesAdministrationComponent;
  let fixture: ComponentFixture<QuizzesAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizzesAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
