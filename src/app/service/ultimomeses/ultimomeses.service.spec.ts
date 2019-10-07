import { TestBed } from '@angular/core/testing';

import { UltimomesesService } from './ultimomeses.service';

describe('UltimomesesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UltimomesesService = TestBed.get(UltimomesesService);
    expect(service).toBeTruthy();
  });
});
