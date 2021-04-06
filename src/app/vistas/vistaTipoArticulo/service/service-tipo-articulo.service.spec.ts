import { TestBed } from '@angular/core/testing';

import { ServiceTipoArticuloService } from './service-tipo-articulo.service';

describe('ServiceTipoArticuloService', () => {
  let service: ServiceTipoArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTipoArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
