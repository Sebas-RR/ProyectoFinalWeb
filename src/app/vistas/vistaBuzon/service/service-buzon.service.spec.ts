import { TestBed } from '@angular/core/testing';

import { ServiceBuzonService } from './service-buzon.service';

describe('ServiceBuzonService', () => {
  let service: ServiceBuzonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBuzonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
