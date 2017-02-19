"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Sprint_1 = require('../../classes/Sprint');
var SprintComponent = (function () {
    function SprintComponent() {
        this.sprint = new Sprint_1.Sprint();
    }
    SprintComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], SprintComponent.prototype, "sprint", void 0);
    SprintComponent = __decorate([
        core_1.Component({
            selector: 'scrumly-sprint',
            templateUrl: './sprint.component.html',
            styleUrls: ['./sprint.component.scss']
        })
    ], SprintComponent);
    return SprintComponent;
}());
exports.SprintComponent = SprintComponent;
