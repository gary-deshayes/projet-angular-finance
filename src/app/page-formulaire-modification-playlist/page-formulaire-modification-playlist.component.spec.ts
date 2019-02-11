import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireModificationPlaylistComponent } from './page-formulaire-modification-playlist.component';

describe('PageFormulaireModificationPlaylistComponent', () => {
  let component: PageFormulaireModificationPlaylistComponent;
  let fixture: ComponentFixture<PageFormulaireModificationPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormulaireModificationPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireModificationPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
