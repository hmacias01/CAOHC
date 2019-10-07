import { TestBed } from '@angular/core/testing';

import { OtoscopiaService } from './otoscopia.service';

describe('OtoscopiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtoscopiaService = TestBed.get(OtoscopiaService);
    expect(service).toBeTruthy();
  });
});
