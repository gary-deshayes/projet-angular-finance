import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEconomyActualityComponent } from './api-economy-actuality.component';

describe('ApiActualiteEcoComponent', () => {
  let component: ApiEconomyActualityComponent;
  let fixture: ComponentFixture<ApiEconomyActualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiEconomyActualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEconomyActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
