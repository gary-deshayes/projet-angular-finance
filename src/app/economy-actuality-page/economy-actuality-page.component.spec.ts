import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyActualityPageComponent } from './economy-actuality-page.component';

describe('PageActualiteEconomiqueComponent', () => {
  let component: EconomyActualityPageComponent;
  let fixture: ComponentFixture<EconomyActualityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomyActualityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyActualityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
