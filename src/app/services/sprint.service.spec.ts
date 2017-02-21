/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SprintService } from './sprint.service';

import { Sprint } from '../classes/Sprint'
import { ISprint } from '../types/ISprint'

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
