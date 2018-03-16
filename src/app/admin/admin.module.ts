import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { AcompanhamentoComponent } from './admin-dashboard/acompanhamento/acompanhamento.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DemoRootComponent } from './admin-demo/demo-root/demo-root.component';





@NgModule({
  imports: [
  CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent,
    AcompanhamentoComponent
   
   

  ],
  exports: [AdminComponent]
})
export class AdminModule { }
