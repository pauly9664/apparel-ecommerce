import { TestBed } from '@angular/core/testing';

import { EtcServiceService } from './etc-service.service';

describe('EtcServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtcServiceService = TestBed.get(EtcServiceService);
    expect(service).toBeTruthy();
  });
});
