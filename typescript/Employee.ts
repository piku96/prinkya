export class Employee{
  private name:string;
  private age:number;
  private  fname:string;
 private lname:string;

    constructor(fname,age,lname){
        
        this.age=age;
        this.fname=fname;
        this.lname=lname;
    }

displayName():void{
    console.log(this.fname+" "+this.lname)
}
}
class Manager extends Employee{
    private noOfTeams:number;
    constructor(fname:string,age:number,noOfTeam:number,lname:string){
    super(fname,age,lname)
    this.noOfTeams=noOfTeam;
}
getNoOfTeams():number{
    return this.noOfTeams;
}
}
var emp=new Employee("iiht", "dfg",10);
emp.displayName();

var mgr=new Manager("iiht",10,20,"sdfgh")
mgr.displayName();
console.log(mgr.getNoOfTeams());



