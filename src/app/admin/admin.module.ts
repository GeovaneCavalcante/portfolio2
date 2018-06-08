import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    AdminComponent,
    SidebarNavComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
