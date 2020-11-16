import { TestBed } from '@angular/core/testing';

import { AuthMessageObserverService } from './auth-message-observer.service';

describe('AuthMessageObserverService', () => {
  let service: AuthMessageObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMessageObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
