export class Book{
   private bookName: String;
    private bookId: number;
    private cost: number;

  
    public setBookName(bookName:String):void{
         this.bookName=bookName;
  }

  public getBookName():String{
      return this.bookName;
  }

  public setBookId(bookId:number):void{
     this.bookId=bookId;
}

public getBookId():number{
    return this.bookId;
}

public setCost(cost:number):void{
    this.cost=cost;
}

public getCost():number{
    return this.cost;
}
}
