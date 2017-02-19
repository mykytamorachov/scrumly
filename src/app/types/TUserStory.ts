export interface TUserStory {
  id: number;
  title: string;
  description?: any;
  state?: string;
  tasks?: Object[]
  date: Date;
  team_involved?: any;
}
