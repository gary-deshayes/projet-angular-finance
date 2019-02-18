import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvellePlaylistComponent } from './page-nouvelle-playlist.component';

describe('PageNouvellePlaylistComponent', () => {
  let component: PageNouvellePlaylistComponent;
  let fixture: ComponentFixture<PageNouvellePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNouvellePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouvellePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
