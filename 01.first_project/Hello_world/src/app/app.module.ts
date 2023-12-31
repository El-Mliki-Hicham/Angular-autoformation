import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { ListUserComponent } from './tasks/list-user/list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultHomeComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
