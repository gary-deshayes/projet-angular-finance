import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDeviseComponent } from './api-devise.component';

describe('ApiDeviseComponent', () => {
  let component: ApiDeviseComponent;
  let fixture: ComponentFixture<ApiDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
