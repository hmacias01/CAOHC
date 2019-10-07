import { TestBed } from '@angular/core/testing';

import { Examen.ServiceService } from './examen.service.service';

describe('Examen.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Examen.ServiceService = TestBed.get(Examen.ServiceService);
    expect(service).toBeTruthy();
  });
});
