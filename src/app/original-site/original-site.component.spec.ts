import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalSiteComponent } from './original-site.component';

describe('OriginalSiteComponent', () => {
  let component: OriginalSiteComponent;
  let fixture: ComponentFixture<OriginalSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
