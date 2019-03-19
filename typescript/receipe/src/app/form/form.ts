export class form{
    private Name: String;
    private Id:number;
    private password:String;
    private Phoneno: number;
     private Gender: String;
     private static counter=1001;
 ele:boolean=true;
   
     public setName(Name:String):void{
          this.Name=Name;
   }
 
   public getName():String{
       return this.Name;
   }
 
   public setId(Id:number):void{
      this.Id=form.counter;
 }
 
 public getId():number{
     return this.Id;
 }
 
 public setPassword(password:String):void{
    this.password=password;
}

public getPassword():String{
 return this.password;
}

public setPhoneno(Phoneno:number):void{
    this.Phoneno=Phoneno;
}

public getphoneno():number{
 return this.Phoneno;
}




 public setGender(Gender:String):void{
     this.Gender=Gender;
 }
 
 public getGender():String{
     return this.Gender;
 }

 public setCounter(counter:number):void{
    form.counter=counter;
}

public getCounter():number{
    return form.counter;
}

 constructor(){
     console.log("Construcor");
     form.counter++;
     this.Id=form.counter;
 }
 }
