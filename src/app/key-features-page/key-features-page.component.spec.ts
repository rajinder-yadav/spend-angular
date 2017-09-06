import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeaturesPageComponent } from './key-features-page.component';

describe('KeyFeaturesPageComponent', () => {
  let component: KeyFeaturesPageComponent;
  let fixture: ComponentFixture<KeyFeaturesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFeaturesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFeaturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
