import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlaylistPage } from './new-playlist-page.component';

describe('PageNouvellePlaylistComponent', () => {
  let component: NewPlaylistPage;
  let fixture: ComponentFixture<NewPlaylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlaylistPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
