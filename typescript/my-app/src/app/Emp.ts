export class Emp{
    private empName: String;
     private empId: number;
     private empSalary: number;
     private static counter=1001;
 
   
     public setEmpName(empName:String):void{
          this.empName=empName;
   }
 
   public getEmpName():String{
       return this.empName;
   }
 
   public setEmpId(empId:number):void{
      this.empId=Emp.counter;
 }
 
 public getEmpId():number{
     return this.empId;
 }
 
 public setEmpSalary(empSalary:number):void{
     this.empSalary=empSalary;
 }
 
 public getEmpSalary():number{
     return this.empSalary;
 }

 public setCounter(counter:number):void{
    Emp.counter=counter;
}

public getCounter():number{
    return Emp.counter;
}

 constructor(){
     console.log("Construcor");
     Emp.counter++;
     this.empId=Emp.counter;
 }
 }
