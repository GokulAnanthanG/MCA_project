import { TestBed } from '@angular/core/testing';

import { HodAuthGuard } from './hod-auth.guard';

describe('HodAuthGuard', () => {
  let guard: HodAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HodAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
