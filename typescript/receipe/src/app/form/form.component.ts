import { Component, OnInit } from '@angular/core';
import {form} from './form';
import { toDate } from '@angular/common/src/i18n/format_date';
@Component({

  selector: 'app-form',
  
    template: `

  
  <form>
 name:<input type="text" placeholder="enter your name">
 Id:<input type="text"><br>
password:<input type="password"><br>
phoneno:<input type="text"><br>
select gender:<input type="radio" name="gender">male
				<input type="radio" name="gender">female
				<br>
				<button type="submit" value="submit">submit form</button>
				</form>
`,
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
