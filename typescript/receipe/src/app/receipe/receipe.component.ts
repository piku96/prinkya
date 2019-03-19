import { Component, OnInit } from '@angular/core';
import {Receipe} from './receipe';
import { toDate } from '@angular/common/src/i18n/format_date';
@Component({
  selector: 'app-receipe',
  template: `
 
  <table border=2>
 
  <tr id="h"  ><th>RECEIPE ID</th><th>RECEIPE NAME</th><th>INGREDIENTS</th><th>OPERATIONS</th></tr>  
  <tr id="r1" *ngFor="let x of repArr" [ngStyle]="{'background-color':getColor(x.repIngredients)}">
  <span *ngIf="x.ele then edit else block"></span>
  <ng-template #block>
  <td>{{x.repId}}</td>
  <td>{{x.repName}}</td>
  <td>{{x.repIngredients}}</td>
  <td><input type="button" (click)="callEdit(x)"  value="edit"/><input type="button" (click)="callDelete(x)"  value="delete"/></td>
 
  </ng-template>

 <ng-template #edit>
 <td>{{x.repId}}</td>
<td><input type=text  [(ngModel)]=x.repName /></td> 
<td><input type=text  [(ngModel)]=x.repIngredients/>/td>/br>
<td><input type="button" (click)="callUpdate(x)" value="update"/>
  <input type="button" (click)="callDelete(x)"  value="delete"/></td>
 </ng-template></tr>
 
  </table>
  
  <span *ngIf=flag></span>
  Receipe Name: <input type="text" [(ngModel)]=repName />
  
 Ingredients: <input type="text" pattern="[A-Z a-z]+" required #repIng=ngModel [(ngModel)]=repIngredients />
 <span *ngIf="repIng.invalid" [ngStyle]="{'color':'red'}">Invalid entry</span><br/>
 <input type="button" (click)="callMe()" value="add"/><br />
 <span #sp [ngStyle]="{'color':'red'}">{{alert}}</span>
   
 <br /> 
 
 <!--You have entered Receipe name as: {{name}} that costs {{cost}}.-->
 
 `,
  styles: [`#r1{background-color:lavender;}
  #h{background-color:yellow;}`]

 

})
export class ReceipeComponent {
repArr: Receipe[]=[];
alert:String="";
flag:boolean=false;
box:boolean=false;
repName:String;
repIngredients:String;
repId:number;
/*
getColor(x:number):boolean
{
 if(x>1005)
  return true;
  else
  return false;
}*/

getColor(x:String):String{
  var y=x.toLowerCase();
  if(y.includes("paneer"))
    return 'green';
  else if(y.includes("chicken"))
    return 'red';
    else if(y.includes("egg"))
      return 'white';
      else
      return 'yellow';
}

  constructor(){
    
  }
  callMe():void{
    this.flag=true;
    console.log("Event Binding");
    
    if(this.repName!=undefined && this.repIngredients!=undefined){
      
     
    var pattern="^[A-Za-z ]+$";
    if(this.repName.match(pattern)==null){
      console.log("Invalid");
      this.alert="Enter only characters.";
    }
    else{
      var rep= new Receipe();
      rep.setrepName(this.repName);
      rep.setrepIngredients(this.repIngredients);
      rep.ele=false;
      this.alert="";
      this.repArr.push(rep);
  }
    }
  }
  

  
    callEdit(temp):void{
      console.log("Edit:"+temp);
      temp.ele=true;
    }

    callUpdate(x):void{
      console.log(x.repId);
      console.log(x.repName);
      console.log(x.repIngredients);

      for(var i=0;i<this.repArr.length;i++){
        if(x.repId==this.repArr[i].getrepID()){   

          var pattern="^[A-Za-z ]+$";
          if(x.repName.match(pattern)==null){
          console.log("Invalid");
          this.alert="Enter only characters.";
          x.ele=true;
          }
         else{
          this.repArr[i].setrepName(x.repName);
          this.repArr[i].setrepIngredients(x.repIngredients);
          this.alert="";

          x.ele=false;
          }
        }
      } 
    }

    callDelete(x):void{
      console.log(x.repId);
      console.log(x.repName);
      console.log(x.repIngredients);

      for(var i=0;i<this.repArr.length;i++){
        if(x.repId==this.repArr[i].getrepID()){
          this.repArr.splice(i,1);
        
        }
      }

    }

}




