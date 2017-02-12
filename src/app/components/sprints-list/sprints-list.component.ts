import { Component, OnInit } from '@angular/core';
import { SprintService } from '../../services/sprint.service';
import { SprintType } from '../../types/sprint-type';
import { Sprint } from '../../classes/sprint';


@Component({
  selector: 'scrumly-sprints-list',
  providers: [SprintService],
  templateUrl: './sprints-list.component.html',
  styleUrls: ['./sprints-list.component.scss']
})
export class SprintsListComponent implements OnInit {
  public sprintList: Sprint[];
  constructor(private sprintService: SprintService) { 
    this.sprintList = [];
  }

  ngOnInit() {
    this.getSprintsList();
  }

  public getSprintsList(): void {
    this.sprintList = this.sprintService.getSprints();
  }

  /**
   * Adds new sprint entry to current list of sprints.
   */
  public addSprintToList() {
    let newSprint = new Sprint();
    newSprint.name = "New Sprint";
    this.sprintList.push(newSprint);
  }

}
