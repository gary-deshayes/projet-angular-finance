import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicCalendarComponent } from './economic-calendar.component';

describe('EconomicCalendarComponent', () => {
  let component: EconomicCalendarComponent;
  let fixture: ComponentFixture<EconomicCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
