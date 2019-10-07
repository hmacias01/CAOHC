import { TestBed } from '@angular/core/testing';

import { AudiogramaService } from './audiograma.service';

describe('AudiogramaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudiogramaService = TestBed.get(AudiogramaService);
    expect(service).toBeTruthy();
  });
});
