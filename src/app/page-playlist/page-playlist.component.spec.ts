import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlaylistComponent } from './page-playlist.component';

describe('PagePlaylistComponent', () => {
  let component: PagePlaylistComponent;
  let fixture: ComponentFixture<PagePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
