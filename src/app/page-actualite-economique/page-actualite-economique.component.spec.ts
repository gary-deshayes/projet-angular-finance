import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActualiteEconomiqueComponent } from './page-actualite-economique.component';

describe('PageActualiteEconomiqueComponent', () => {
  let component: PageActualiteEconomiqueComponent;
  let fixture: ComponentFixture<PageActualiteEconomiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActualiteEconomiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActualiteEconomiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
