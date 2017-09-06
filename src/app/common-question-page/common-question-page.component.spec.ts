import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonQuestionPageComponent } from './common-question-page.component';

describe('CommonQuestionPageComponent', () => {
  let component: CommonQuestionPageComponent;
  let fixture: ComponentFixture<CommonQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
