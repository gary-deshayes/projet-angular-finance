import { TestBed } from '@angular/core/testing';

import { YoutubeAuthService } from './youtube-auth.service';

describe('YoutubeAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeAuthService = TestBed.get(YoutubeAuthService);
    expect(service).toBeTruthy();
  });
});
