import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { SidenavComponent } from './sidenav/sidenav.component';
import { SprintsListComponent } from './sprints-list/sprints-list.component';
import { SprintComponent } from './sprint/sprint.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    SidenavComponent,
    SprintsListComponent,
    SprintComponent,
    HeaderComponent
  ],
  exports: [
    SidenavComponent,
    SprintsListComponent,
    SprintComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
