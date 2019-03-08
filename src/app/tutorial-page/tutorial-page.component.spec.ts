import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPageComponent } from './tutorial-page.component';

describe('PageTutorielComponent', () => {
  let component: TutorialPageComponent;
  let fixture: ComponentFixture<TutorialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
