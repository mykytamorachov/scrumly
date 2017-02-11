import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component'


@NgModule({
  imports: [
    CommonModule,
    SidenavComponent
  ],
  declarations: [SidenavModule]
})
export class SidenavModule { }
