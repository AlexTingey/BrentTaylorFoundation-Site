import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCompetitionComponent } from './old-competition.component';

describe('OldCompetitionComponent', () => {
  let component: OldCompetitionComponent;
  let fixture: ComponentFixture<OldCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
