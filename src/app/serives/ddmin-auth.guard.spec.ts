import { TestBed } from '@angular/core/testing';

import { DdminAuthGuard } from './ddmin-auth.guard';

describe('DdminAuthGuard', () => {
  let guard: DdminAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DdminAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
