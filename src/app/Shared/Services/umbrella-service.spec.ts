import { TestBed } from '@angular/core/testing';

import { UmbrellaService } from './umbrella-service';

describe('UmbrellaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmbrellaService = TestBed.get(UmbrellaService);
    expect(service).toBeTruthy();
  });
});
