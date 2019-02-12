import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePlaylistComponent } from './form-update-playlist.component';

describe('FormUpdatePlaylistComponent', () => {
  let component: FormUpdatePlaylistComponent;
  let fixture: ComponentFixture<FormUpdatePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdatePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdatePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
