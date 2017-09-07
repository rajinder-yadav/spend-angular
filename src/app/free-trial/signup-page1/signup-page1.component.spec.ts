import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPage1Component } from './signup-page1.component';

describe('SignupPage1Component', () => {
  let component: SignupPage1Component;
  let fixture: ComponentFixture<SignupPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
