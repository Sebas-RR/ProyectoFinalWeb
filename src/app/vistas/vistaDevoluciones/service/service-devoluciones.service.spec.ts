import { TestBed } from '@angular/core/testing';

import { ServiceDevolucionesService } from './service-devoluciones.service';

describe('ServiceDevolucionesService', () => {
  let service: ServiceDevolucionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDevolucionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
