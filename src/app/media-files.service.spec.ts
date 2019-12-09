import { TestBed } from '@angular/core/testing';

import { MediaFilesService } from './media-files.service';

describe('MediaFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaFilesService = TestBed.get(MediaFilesService);
    expect(service).toBeTruthy();
  });
});
