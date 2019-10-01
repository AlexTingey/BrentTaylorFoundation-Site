import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreepillarsComponent } from './threepillars.component';

describe('ThreepillarsComponent', () => {
  let component: ThreepillarsComponent;
  let fixture: ComponentFixture<ThreepillarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreepillarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreepillarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
