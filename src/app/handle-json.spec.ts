import { TestBed } from '@angular/core/testing';

import { HandleJSON } from './handle-json';

describe('HandleJSON', () => {
  let service: HandleJSON;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleJSON);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
