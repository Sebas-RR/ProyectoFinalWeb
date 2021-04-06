import { TestBed } from '@angular/core/testing';

import { ServiceVentasService } from './service-ventas.service';

describe('ServiceVentasService', () => {
  let service: ServiceVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
