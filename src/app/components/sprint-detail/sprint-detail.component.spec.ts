/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {SprintDetailComponent} from './sprint-detail.component';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('SprintDetailComponent', () => {
  let component: SprintDetailComponent;
  let fixture: ComponentFixture<SprintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprintDetailComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
