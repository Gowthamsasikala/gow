import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-register',
  templateUrl: './policy-register.component.html',
  styleUrls: ['./policy-register.component.css']
})
export class PolicyRegisterComponent implements OnInit {
Pname:String;
Cname:String;
  constructor() { }
  PolicyRegister(){
    console.log(this.Pname +" and "+this.Cname);
  }
  ngOnInit() {
  }

}
