"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var sprint_service_1 = require('../../services/sprint.service');
var Sprint_1 = require('../../classes/Sprint');
var SprintsListComponent = (function () {
    function SprintsListComponent(sprintService) {
        this.sprintService = sprintService;
        this.sprintList = [];
    }
    SprintsListComponent.prototype.ngOnInit = function () {
        this.getSprintsList_();
    };
    SprintsListComponent.prototype.getSprintsList_ = function () {
        this.sprintList = this.sprintService.getSprints();
    };
    /**
     * Adds new sprint entry to current list of sprints.
     */
    SprintsListComponent.prototype.addSprintToList = function () {
        var newSprint = new Sprint_1.Sprint();
        newSprint.name = "New Sprint";
        this.sprintList.push(newSprint);
    };
    SprintsListComponent = __decorate([
        core_1.Component({
            selector: 'scrumly-sprints-list',
            providers: [sprint_service_1.SprintService],
            templateUrl: './sprints-list.component.html',
            styleUrls: ['./sprints-list.component.scss']
        })
    ], SprintsListComponent);
    return SprintsListComponent;
}());
exports.SprintsListComponent = SprintsListComponent;
