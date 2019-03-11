import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdatePlaylistPageComponent } from './form-update-playlist-page.component';

describe('PageFormulaireModificationPlaylistComponent', () => {
  let component: FormUpdatePlaylistPageComponent;
  let fixture: ComponentFixture<FormUpdatePlaylistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdatePlaylistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdatePlaylistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
