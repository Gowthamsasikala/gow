import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

first:string;
last:String;
Male:String;
Female:String;



Validation(){

console.log(this.first);
//console.log(this.FirstName +" " +this.LastName);
console.log(this.Male);
console.log(this.Female);
}



  ngOnInit() {
   
  
  }


}
