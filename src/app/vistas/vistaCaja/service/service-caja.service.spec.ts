import { TestBed } from '@angular/core/testing';

import { ServiceCajaService } from './service-caja.service';

describe('ServiceCajaService', () => {
  let service: ServiceCajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
