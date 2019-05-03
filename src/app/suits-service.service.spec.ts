import { TestBed } from '@angular/core/testing';

import { SuitsServiceService } from './suits-service.service';

describe('SuitsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuitsServiceService = TestBed.get(SuitsServiceService);
    expect(service).toBeTruthy();
  });
});
