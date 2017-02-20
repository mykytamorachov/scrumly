import { Injectable } from '@angular/core';

import { Sprint } from '../classes/Sprint'
import { ISprint } from '../types/ISprint'
import { SPRINTS } from '../mocks/mock-sprint-list'

@Injectable()
export class SprintService {
  spintsList: Array<Sprint> = [];
  constructor() { }

  public getSprints(): Array<Sprint> {
    return SPRINTS;
  }
}
