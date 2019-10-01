import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMOreComponent } from './learn-more.component';

describe('LearnMOreComponent', () => {
  let component: LearnMOreComponent;
  let fixture: ComponentFixture<LearnMOreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMOreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMOreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
