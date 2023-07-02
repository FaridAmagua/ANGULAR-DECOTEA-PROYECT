import { TestBed } from '@angular/core/testing';

import { ScriptloaderService } from './scriptloader.service';

describe('ScriptloaderService', () => {
  let service: ScriptloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
