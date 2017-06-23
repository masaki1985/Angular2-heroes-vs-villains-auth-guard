import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { VillainService } from './villain.service';

describe('VillainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [VillainService]
    });
  });

  it('should be created', inject([VillainService], (service: VillainService) => {
    expect(service).toBeTruthy();
  }));
});
