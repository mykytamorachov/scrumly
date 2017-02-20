import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'scrumly-sprint-detail',
  templateUrl: './sprint-detail.component.html',
  styleUrls: ['./sprint-detail.component.scss']
})
export class SprintDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    //todo можливо переробити через snapshot якщо є впевненість що маршрут не буде використано повторно
    this._route.params.subscribe(id => {
      console.log(id);
      //todo get on Sprint ID service from
    });
  }

  gotoSprintList() {
    this._router.navigate(['']);
  }

}
