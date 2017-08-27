import { TestBed, inject } from '@angular/core/testing';

import { RealdataService } from './realdata.service';

describe('RealdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealdataService]
    });
  });

  it('should be created', inject([RealdataService], (service: RealdataService) => {
    expect(service).toBeTruthy();
  }));
});
