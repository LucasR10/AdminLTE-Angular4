import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GrupoService } from './admin/admin-services/grupo.service';
import { DemoRootComponent } from './admin/admin-demo/demo-root/demo-root.component';
import { FormsModule } from '@angular/forms';



@NgModule({  
  declarations: [
    AppComponent, DemoRootComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    GrupoService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
