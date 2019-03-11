import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlaylistComponent } from './form-playlist.component';

describe('FormPlaylistComponent', () => {
  let component: FormPlaylistComponent;
  let fixture: ComponentFixture<FormPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
