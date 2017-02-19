import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from '../../classes/Sprint'

@Component({
  selector: 'scrumly-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  @Input()
  sprint: Sprint = new Sprint();
  constructor() {

  }

  ngOnInit() {
  }

}
