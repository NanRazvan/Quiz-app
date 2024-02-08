import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuizzModalComponent } from './start-quizz-modal.component';

describe('StartQuizzModalComponent', () => {
  let component: StartQuizzModalComponent;
  let fixture: ComponentFixture<StartQuizzModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartQuizzModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartQuizzModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
