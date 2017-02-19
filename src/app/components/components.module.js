"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
require('hammerjs');
var sidenav_component_1 = require('./sidenav/sidenav.component');
var sprints_list_component_1 = require('./sprints-list/sprints-list.component');
var sprint_component_1 = require('./sprint/sprint.component');
var header_component_1 = require('./header/header.component');
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MaterialModule.forRoot()
            ],
            declarations: [
                sidenav_component_1.SidenavComponent,
                sprints_list_component_1.SprintsListComponent,
                sprint_component_1.SprintComponent,
                header_component_1.HeaderComponent
            ],
            exports: [
                sidenav_component_1.SidenavComponent,
                sprints_list_component_1.SprintsListComponent,
                sprint_component_1.SprintComponent,
                header_component_1.HeaderComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
