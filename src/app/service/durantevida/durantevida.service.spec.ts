import { TestBed } from '@angular/core/testing';

import { DurantevidaService } from './durantevida.service';

describe('DurantevidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DurantevidaService = TestBed.get(DurantevidaService);
    expect(service).toBeTruthy();
  });
});
