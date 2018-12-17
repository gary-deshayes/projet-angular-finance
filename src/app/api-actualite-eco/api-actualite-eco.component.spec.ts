import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiActualiteEcoComponent } from './api-actualite-eco.component';

describe('ApiActualiteEcoComponent', () => {
  let component: ApiActualiteEcoComponent;
  let fixture: ComponentFixture<ApiActualiteEcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiActualiteEcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiActualiteEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
