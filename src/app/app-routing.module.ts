import {Routes, RouterModule} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SprintsListComponent} from "./components/sprints-list/sprints-list.component";
import {UserStoryListComponent} from "./components/user-story-list/user-story-list.component";
import {SprintDetailComponent} from "./components/sprint-detail/sprint-detail.component";


const APP_ROUTES: Routes = [
  { path: '',  component: SprintsListComponent, pathMatch: "full"  },
  { path: 'sprint/:id', component: SprintDetailComponent },
  { path: 'user-story',  component: UserStoryListComponent, pathMatch: "full"  },
  {path: '**', redirectTo: '/404', pathMatch: "full"},
  {path: '404', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
