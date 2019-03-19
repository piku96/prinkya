import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReceipComponent } from './receip/receip.component';
import { ReceipeComponent } from './receipe/receipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CalculatorComponent,
    ReceipComponent,
    ReceipeComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
