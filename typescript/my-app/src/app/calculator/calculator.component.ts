import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template:`<p>
  calculator works!
the addition output is : {{addition()}}<br />
the substraction output is : {{sub()}}<br/>
the multiplication output is : {{mul()}}<br/>
the division output is :  {{div()}}<br/>
</p>
`,
  styles: [`p{color: blue;}`]
})
export class CalculatorComponent implements OnInit {
   fnumber:number=20;
   snumber:number=50;
  
    constructor() {
    
     }
    addition():number{
       return(this.fnumber+this.snumber)
     } 
     sub():number{
      return(this.fnumber-this.snumber)
    } 

    mul():number{
      return(this.fnumber*this.snumber)
    } 
    div():number{
      return(this.fnumber/this.snumber)
    } 
     ngOnInit() {
      console.log("ngoninit method")
    }
  
  }