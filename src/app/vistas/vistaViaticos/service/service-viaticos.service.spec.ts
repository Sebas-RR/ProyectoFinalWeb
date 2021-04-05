import { TestBed } from '@angular/core/testing';

import { ServiceViaticosService } from './service-viaticos.service';

describe('ServiceViaticosService', () => {
  let service: ServiceViaticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceViaticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
