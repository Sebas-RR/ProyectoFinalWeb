import { TestBed } from '@angular/core/testing';

import { ServicePersonasService } from './service-personas.service';

describe('ServicePersonasService', () => {
  let service: ServicePersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
