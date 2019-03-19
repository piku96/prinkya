import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
private fname:String="iiht";
private  lname:String="legato"
age:number;
  constructor() {
  
   }
displayName():String{
  return (this.fname+" "+this.lname);
}
  ngOnInit() {
    console.log("ngoninit method")
  }

}
