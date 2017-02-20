import { UserStory } from '../classes/UserStory';

let story = new UserStory();
story.id = 11;
story.title = 'Mr. Nice';
story.description = 'Some Description';
story.state = 1;
story.tasks = [{}, {}];
story.date = new Date();
story.team_involved = 'Some Team 1';

export const USERSTORY = story;