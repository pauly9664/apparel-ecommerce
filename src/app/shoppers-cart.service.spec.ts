import { TestBed } from '@angular/core/testing';

import { ShoppersCartService } from './shoppers-cart.service';

describe('ShoppersCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppersCartService = TestBed.get(ShoppersCartService);
    expect(service).toBeTruthy();
  });
});
