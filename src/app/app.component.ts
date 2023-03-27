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

  studentDtls:any[]=[
    {
      Rollno:1,
      Name:"Ram",
      Gender:"Male"
    },
    {
     Rollno:2,
     Name:"Sham",
     Gender:"Male", 
    },
    {
      Rollno:3,
      Name:"Hema",
      Gender:"Female"
    }
  ];

  classone=true;
  classtwo=true;

  addClasses={
    box:true,
    border:false,
    circle:false
  };

  displayClass(){
    this.classone=!this.classone;
    this.classtwo=!this.classtwo;
  }

  circleShape(){
    this.addClasses.border=!this.addClasses.border;
    this.addClasses.circle=!this.addClasses.circle;
  }

}
