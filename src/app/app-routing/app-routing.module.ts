import { AdminDashboard1Component } from './../admin/painel/admin-dashboard1.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin/painel', pathMatch: 'full' },
      { path: 'inicio', redirectTo: 'admin/painel', pathMatch: 'full'}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
