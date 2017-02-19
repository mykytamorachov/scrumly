/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserStoryListComponent } from './user-story-list.component';
import {UserStoryComponent} from "../user-story/user-story.component";
import {MaterialModule} from "@angular/material";

describe('UserStoryListComponent', () => {
  let component: UserStoryListComponent;
  let fixture: ComponentFixture<UserStoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryListComponent, UserStoryComponent ],
      imports: [MaterialModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
