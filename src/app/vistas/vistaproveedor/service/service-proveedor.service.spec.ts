import { TestBed } from '@angular/core/testing';

import { ServiceProveedorService } from './service-proveedor.service';

describe('ServiceProveedorService', () => {
  let service: ServiceProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
