
import { AdminDashboard1Component } from './../painel/admin-dashboard1.component';
import { AcpListarComponent } from './../painel/acp-listar/acp-listar.component';

import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  
  RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'painel',
            pathMatch: 'full'
          },
          {
            path: 'painel',
            component: AdminDashboard1Component
          },
          {
            path: '',
            component: AdminDashboard1Component
          },
          {
            path: 'acompanhamento',
            component: AcpListarComponent
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
