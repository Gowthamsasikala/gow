import { Component, OnInit } from '@angular/core';
import {UserInterfaceComponent} from '../user-interface/user-interface.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-sign-in-page',
  templateUrl: './user-sign-in-page.component.html',
  styleUrls: ['./user-sign-in-page.component.css']
})
export class UserSignInPageComponent implements OnInit {
  
 
  UserType:String;
  Password:String;
  constructor(private router:Router) { }
  validation(){
    if(this.UserType === "Gowtham" && this.Password === "Gowtham7$"){
      this.router.navigate(["Uinter"]);
    }
    
  }
  ngOnInit() {
  }

}
