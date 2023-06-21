import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlisComponent } from './userlis/userlis.component';
import { AdminlistComponent } from './adminlist/adminlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlisComponent,
    AdminlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
