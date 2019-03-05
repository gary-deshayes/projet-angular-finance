import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCurrencyComponent } from './api-currency.component';

describe('ApiDeviseComponent', () => {
  let component: ApiCurrencyComponent;
  let fixture: ComponentFixture<ApiCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
