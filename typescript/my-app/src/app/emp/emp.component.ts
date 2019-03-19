import { Component, OnInit } from '@angular/core';
import {Emp} from '../emp';
@Component({
  selector: 'app-emp',
  template: `
  <table>
  <tr id="h"><th>EMPLOYEE ID</th><th>EMPLOYEE NAME</th><th>EMPLOYEE SALARY</th></tr>
  <tr id="r1"><td>{{emp1.getEmpId()}}</td><td>{{emp1.getEmpName()}}</td><td>{{emp1.getEmpSalary()}}</td></tr>
  <tr id="r2"><td>{{emp2.getEmpId()}}</td><td>{{emp2.getEmpName()}}</td><td>{{emp2.getEmpSalary()}}</td></tr>
  <tr id="r3"><td>{{emp3.getEmpId()}}</td><td>{{emp3.getEmpName()}}</td><td>{{emp3.getEmpSalary()}}</td></tr> 
  </table>`,
  styles: [`#r1,#r3{background-color:blue;}
  #r2,#h{background-color:yellow;}`]

})
export class EmpComponent{

  emp1:Emp;
  emp2:Emp;
  emp3:Emp;

  constructor(){
    var emp1= new Emp();
    emp1.setEmpName("ABC");
    emp1.setEmpSalary(8764);
   
    this.emp1=emp1;

    var emp2= new Emp();
    emp2.setEmpName("XYZ");
    emp2.setEmpSalary(7856);
    this.emp2=emp2;

    var emp3= new Emp();
    emp3.setEmpName("LMN");
    emp3.setEmpSalary(9845);
    this.emp3=emp3;
  }

}
