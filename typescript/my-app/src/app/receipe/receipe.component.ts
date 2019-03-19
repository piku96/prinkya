import { Component, OnInit } from '@angular/core';
import {receipe} from './receipe';
@Component({
  selector: 'app-receipe',
  template: `
  <table>
  <tr id="h"><th>receipe ID</th><th>receipe NAME</th><th>cost</th></tr>
  <tr id="r1"><td>{{receipe1.getReceipeId()}}</td><td>{{receipe1.getReceipeName()}}</td><td>{{receipe1.getCost()}}</td></tr>
  <tr id="r2"><td>{{receipe2.getReceipeId()}}</td><td>{{receipe2.getReceipeName()}}</td><td>{{receipe2.getCost()}}</td></tr>
  <tr id="r3"><td>{{receipe3.getReceipeId()}}</td><td>{{receipe3.getReceipeName()}}</td><td>{{receipe3.getCost()}}</td></tr> 
  </table>`,
  styles: [`#r1,#r3{background-color:blue;}
  #r2,#h{background-color:yellow;}`]

})
export class EmpComponent{

  receipe1:receipe;
receipe2:receipe;
receipe3:receipe;

  constructor(){
    var receipe1= new receipe();
    receipe1.setReceipeName("poha");
    receipe1.setCost(8764);
   
    this.receipe1=receipe1;

    var receipe2= new receipe();
    receipe2.setReceipeName("panirmasala");
    receipe2.setCost(7856);
    this.receipe2=receipe2;

    var receipe3= new receipe();
    receipe3.setReceipeName("chat");
    receipe3.setCost(9845);
    this.receipe3=receipe3;
  }

}
