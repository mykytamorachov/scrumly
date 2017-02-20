import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from '../../classes/Sprint'
import {ISprint} from "../../types/ISprint";
import {Router} from "@angular/router";

@Component({
  selector: 'scrumly-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  @Input()
  sprint: Sprint = new Sprint();
  constructor(private _router: Router) {

  }

  ngOnInit() {
  }

  public onSelect (event: Event, sprint: ISprint) {
    event.preventDefault();
    this._router.navigate(['/sprint', sprint.id]);
  }

}
