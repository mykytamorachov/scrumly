import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { SidenavComponent } from './sidenav/sidenav.component';
import { SprintsListComponent } from './sprints-list/sprints-list.component';
import { SprintComponent } from './sprint/sprint.component';
import { HeaderComponent } from './header/header.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { UserStoryListComponent } from './user-story-list/user-story-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    SidenavComponent,
    SprintsListComponent,
    SprintComponent,
    HeaderComponent,
    UserStoryComponent,
    UserStoryListComponent
  ],
  exports: [
    SidenavComponent,
    SprintsListComponent,
    SprintComponent,
    HeaderComponent,
    UserStoryComponent,
    UserStoryListComponent
  ]
})
export class ComponentsModule { }
