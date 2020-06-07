import { TestBed } from '@angular/core/testing';

import { MypreloadingService } from './mypreloading.service';

describe('MypreloadingService', () => {
  let service: MypreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
