import { TestBed } from '@angular/core/testing';

import { AyerhService } from './ayerh.service';

describe('AyerhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyerhService = TestBed.get(AyerhService);
    expect(service).toBeTruthy();
  });
});
