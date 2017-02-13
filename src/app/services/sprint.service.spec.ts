/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SprintService } from './sprint.service';

import { Sprint } from '../classes/sprint'
import { SprintType } from '../types/sprint-type'

describe('SprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprintService]
    });
  });

  it('should be defined', inject([SprintService], (service: SprintService) => {
    expect(service).toBeDefined();
  }));
});
