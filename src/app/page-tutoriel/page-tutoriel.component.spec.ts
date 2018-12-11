import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTutorielComponent } from './page-tutoriel.component';

describe('PageTutorielComponent', () => {
  let component: PageTutorielComponent;
  let fixture: ComponentFixture<PageTutorielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTutorielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTutorielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
