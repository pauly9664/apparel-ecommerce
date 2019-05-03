import { TestBed } from '@angular/core/testing';

import { BagServiceService } from './bag-service.service';

describe('BagServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BagServiceService = TestBed.get(BagServiceService);
    expect(service).toBeTruthy();
  });
});
