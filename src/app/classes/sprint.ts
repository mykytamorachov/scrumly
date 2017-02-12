import { SprintType } from '../types/sprint-type'

export class Sprint {
  private id: number;
  private name: string;
  private backlog?: any;
  private capacity?: number;
  private sprint_start?: Date;
  private sprint_end?: Date;
  private demo_date?: Date;
  private team_involved?: any;

  public constructor(
    _id: number,
    _name: string,
    _backlog: any,
    _capacity: number,
    _sprint_start: Date,
    _sprint_end: Date,
    _demo_date: Date,
    _team_involved: any) {
      this.id = _id;
      this.name = _name;
      this.backlog = _backlog;
      this.capacity = _capacity;
      this.sprint_start = _sprint_start;
      this.sprint_end = _sprint_end;
      this.demo_date = _demo_date;
      this.team_involved = _team_involved;
  }

  public createInstanceFromObject(object: SprintType): Sprint {
    try {
      return new Sprint(
                    object.id,
                    object.name,
                    object.backlog,
                    object.capacity,
                    object.sprint_start,
                    object.sprint_end,
                    object.demo_date,
                    object.team_involved
      );
    }
    catch (e) {
      return;
    }
    
  }
}
