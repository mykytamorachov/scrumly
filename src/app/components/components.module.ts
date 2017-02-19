import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { SidenavComponent } from './sidenav/sidenav.component';
import {components} from "./index";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    SidenavComponent,
    ...components
  ],
  exports: [
    ...components,
    SidenavComponent
  ]
})
export class ComponentsModule { }
