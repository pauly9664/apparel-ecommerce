import { TestBed } from '@angular/core/testing';

import { ShoeServiceService } from './shoe-service.service';

describe('ShoeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoeServiceService = TestBed.get(ShoeServiceService);
    expect(service).toBeTruthy();
  });
});
