import { Component, OnInit } from '@angular/core';
import {UserStory} from "../../classes/UserStory";

@Component({
  selector: 'scrumly-user-story-list',
  templateUrl: './user-story-list.component.html',
  styleUrls: ['./user-story-list.component.scss']
})
export class UserStoryListComponent implements OnInit {
  public userStoryList: UserStory[];

  constructor() {
    this.userStoryList = [];
  }

  ngOnInit() {
    this.getUserStoriesList_();
  }

  private getUserStoriesList_() {
    console.log('user story list');
    //todo service logic
  }

}
