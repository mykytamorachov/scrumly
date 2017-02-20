/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SprintsListComponent } from './sprints-list.component';
import { SprintComponent } from '../sprint/sprint.component';
import { SprintService } from '../../services/sprint.service';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {RouterTestingModule} from "@angular/router/testing";

describe('SprintsListComponent', () => {
  let component: SprintsListComponent;
  let fixture: ComponentFixture<SprintsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ MaterialModule.forRoot(), RouterTestingModule ],
      providers: [SprintService],
      declarations: [ SprintsListComponent, SprintComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
