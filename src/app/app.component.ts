import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  style='italic';
  fsize='30px';
 
  addstyles={
    width:'150px',
    height:'150px',
    background:'skyblue',
    color:'yellow',
    border:''
  };

  addStylesFunc(){
    this.addstyles['color']="purple";
    this.addstyles['border']="2px solid black";
  }

}
