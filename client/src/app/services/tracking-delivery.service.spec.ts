import { TestBed } from '@angular/core/testing';

import { TrackingDeliveryService } from './tracking-delivery.service';

describe('TrackingDeliveryService', () => {
  let service: TrackingDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
