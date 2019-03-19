interface Calculator {
	private a:number;
    private b:number;
    addition():void;
    substract():void;
    multiplication():void;
    division():void;
    constructor (c:number,d:number){
	 this.a=c;
	 this.b=d;
	 
 }
 addition():void{
     console.log("addition"+(this.a+this.b))
    
 }

 substract():void{
     console.log("substract"+(this.a-this.b))
 }

  multiplication():void{
      console.log("mutiplication"+(this.a*this.b))
  }
  
 
  division():void{
     console.log("division"+(this.a/this.b))
	 
    
	
		
		
	}
 var addition=new Calculator(10,20);
addition.addition();



