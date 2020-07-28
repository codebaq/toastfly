import { TestBed } from '@angular/core/testing';

import { ToastflyService } from './toastfly.service';

describe('ToastflyService', () => {
  let service: ToastflyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastflyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
