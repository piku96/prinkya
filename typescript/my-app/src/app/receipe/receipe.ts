export class receipe{
    private receipeName: String;
     private receipeId: number;
     private cost: number;
 
   
     public setReceipeName(receipeName:String):void{
          this.receipeName=receipeName;
   }
 
   public getReceipeName():String{
       return this.receipeName;
   }
 
   public setReceipeId(receipeId:number):void{
      this.receipeId=receipeId;
 }
 
 public getReceipeId():number{
     return this.receipeId;
 }
 
 public setCost(cost:number):void{
     this.cost=cost;
 }
 
 public getCost():number{
     return this.cost;
 }
 }
 