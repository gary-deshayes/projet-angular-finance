import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOnevideoComponent } from './page-onevideo.component';

describe('PageOnevideoComponent', () => {
  let component: PageOnevideoComponent;
  let fixture: ComponentFixture<PageOnevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOnevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOnevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
