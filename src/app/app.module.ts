import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarWelcomeComponent } from './nav-bar-welcome/nav-bar-welcome.component';
import { WelcomePicComponent } from './welcome-pic/welcome-pic.component';
import { WelcomePoliciesComponent } from './welcome-policies/welcome-policies.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserSignInPageComponent } from './user-sign-in-page/user-sign-in-page.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarWelcomeComponent,
    WelcomePicComponent,
    WelcomePoliciesComponent,
    UserRegisterComponent,
    WelcomeComponent,
    UserSignInPageComponent,
    UserInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    RouterModule.forRoot([
      {path:'Welcome' , component:WelcomeComponent},
      {path:'', redirectTo:'welcome' ,pathMatch:'full'},
      {path:'UserRegister',component:UserRegisterComponent},
      {path:'Signin',component:UserSignInPageComponent},
      {path:'Uinter',component:UserInterfaceComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
