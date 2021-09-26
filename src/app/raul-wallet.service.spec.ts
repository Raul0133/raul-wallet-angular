import { TestBed } from '@angular/core/testing';

import { RaulWalletService } from './raul-wallet.service';

describe('RaulWalletService', () => {
  let service: RaulWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaulWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
