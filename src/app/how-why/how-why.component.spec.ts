import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWhyComponent } from './how-why.component';

describe('HowWhyComponent', () => {
  let component: HowWhyComponent;
  let fixture: ComponentFixture<HowWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
