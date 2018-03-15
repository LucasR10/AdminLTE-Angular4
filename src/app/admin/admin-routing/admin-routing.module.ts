


import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcompanhamentoComponent } from '../admin-dashboard/acompanhamento/acompanhamento.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
  
  RouterModule.forChild([
      {
        path: 'inicio',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'inicio',
            pathMatch: 'full'
          },
          {
            path: 'inicio',
            component: AdminDashboardComponent
          },
          {
            path: '',
            component: AdminDashboardComponent
          },
          {
            path: 'acompanhamento',
            component: AcompanhamentoComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
