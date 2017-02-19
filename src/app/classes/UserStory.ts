import { IUserStory } from '../types/IUserStory'

export class UserStory {
  public id: number;
  public title: string;
  public description?: any;
  public state?: number;
  public tasks?: Object[];
  public date: Date;
  public team_involved?: any;

  public constructor() {}

}
