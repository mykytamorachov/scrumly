import { Injectable } from '@angular/core';

import { Sprint } from '../classes/Sprint'
import { ISprint } from '../types/ISprint'

@Injectable()
export class SprintService {
  spintsList: Array<Sprint> = [];
  constructor() { }

  public getSprints(): Array<Sprint> {
    let list = [];
    for (let i=0; i<3; i++) {
      let sprint = new Sprint();
      sprint.name = "Sprint " + i;
      list.push(sprint);
    }
    return list;
  }
}
