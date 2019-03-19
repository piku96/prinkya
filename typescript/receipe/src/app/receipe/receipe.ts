export class Receipe{
    private repName: String;
     private repId: number;
     private repIngredients: String;
     private static counter=1001;
 ele:boolean=true;
   
     public setrepName(repName:String):void{
          this.repName=repName;
   }
 
   public getrepName():String{
       return this.repName;
   }
 
   public setrepID(repID:number):void{
      this.repId=Receipe.counter;
 }
 
 public getrepID():number{
     return this.repId;
 }
 
 public setrepIngredients(repIngredients:String):void{
     this.repIngredients=repIngredients;
 }
 
 public getrepIngredients():String{
     return this.repIngredients;
 }

 public setCounter(counter:number):void{
    Receipe.counter=counter;
}

public getCounter():number{
    return Receipe.counter;
}

 constructor(){
     console.log("Construcor");
     Receipe.counter++;
     this.repId=Receipe.counter;
 }
 }
