import { Component, ContentChild, ElementRef, QueryList, TemplateRef, ViewChild,ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  testChild?: String ;
  //get ref child  component or a template
  @ContentChild('admin')
  //hold a reference to any type of template.
  AdminTemplate?: TemplateRef<any>
  constructor(){}


  @ViewChild("btnChold")
  btnChold?:ElementRef ;


// ngAfterViewInit  called after the component's view has been fully initialized.
  ngAfterViewInit():void{
    console.log(this.btnChold?.nativeElement.innerHTML)

  }

}
