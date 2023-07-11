import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import { FormComponent } from './form/form.component';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateFormComponent } from './update-form/update-form.component'

const routes = [
  {
    path:'about/:name',
    component:AboutComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"form",
    component:FormComponent
  },
  {
    path:"updateForm/:id",
    component:UpdateFormComponent
  },
  {
    path:"",
    component:ContactListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FormComponent,
    ContactListComponent,
    UpdateFormComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
