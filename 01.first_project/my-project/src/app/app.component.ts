import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'my-project';

  @ViewChild(BodyComponent)
  bodyComponent? : BodyComponent;

  @ViewChildren(HeaderComponent)
  HeaderComponent?: QueryList<HeaderComponent>;


  ngAfterViewInit():void{
    if( this.bodyComponent != null){
    this.bodyComponent.testChild = "eeee"
    console.log(this.bodyComponent.testChild.toString())
    console.log(this.HeaderComponent)
  }
  }

}
