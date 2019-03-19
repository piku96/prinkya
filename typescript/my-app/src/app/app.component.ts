import { Component } from '@angular/core';
import { Book } from './Book';
import {Emp} from './emp';

@Component({
  selector: 'app-root',
  template: `
 <app-emp></app-emp>
  <table border=1>
  <tr id="h"><th>BOOK ID</th><th>BOOK NAME</th><th>COST</th></tr>
  <tr id="r1"><td>{{book1.getBookId()}}</td><td>{{book1.getBookName()}}</td><td>{{book1.getCost()}}</td></tr>
  <tr id="r2"><td>{{book2.getBookId()}}</td><td>{{book2.getBookName()}}</td><td>{{book2.getCost()}}</td></tr>
  <tr id="r3"><td>{{book3.getBookId()}}</td><td>{{book3.getBookName()}}</td><td>{{book3.getCost()}}</td></tr> 
  </table>`,
  styles: [`#r1,#r3{background-color:blue;}
  #r2,#h{background-color:yellow;}`]
})
export class AppComponent {
  
  book1:Book;
  book2:Book;
  book3:Book;

  constructor(){
    var book1= new Book();
    book1.setBookName("HTML");
    book1.setBookId(1003);
    book1.setCost(8764);
    this.book1=book1;

    var book2= new Book();
    book2.setBookName("CSS");
    book2.setBookId(1004);
    book2.setCost(7856);
    this.book2=book2;

    var book3= new Book();
    book3.setBookName("JQuery");
    book3.setBookId(1005);
    book3.setCost(9845);
    this.book3=book3;
  }
}

