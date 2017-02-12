import { SprintType } from '../types/sprint-type'

export class Sprint {
  public id: number;
  public name: string;
  public backlog?: any;
  public capacity?: number;
  public sprint_start?: Date;
  public sprint_end?: Date;
  public demo_date?: Date;
  public team_involved?: any;

  public constructor() {}

  public createInstanceFromObject(object: SprintType): Sprint {
    try {
      let sprint = new Sprint();
      Object.keys(object).map(function(key, index) {
        sprint[key] = object[key];
      });
      return sprint;
    }
    catch (e) {
      return;
    }
  }
  
}
