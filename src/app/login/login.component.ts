import { Component, OnInit } from '@angular/core';
import { UserProfileService, LoginRequest } from "app/core/user-profile.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //TODO
  loginRequest: LoginRequest = {
    email: 'hero@example.com',
    password: 'password',
  };
  loginRequest2: LoginRequest = {
    email: 'sample@example.com',
    password: 'password',
  };
  
  constructor(
    private UserProfileService: UserProfileService,
  ) { }

  ngOnInit() {
  }

  /**
   * ログインする
   * @returns { void }
   */
  login(): void {
    this.UserProfileService.login(this.loginRequest).subscribe(() => {
      if(this.UserProfileService.loginState$.getValue())
      {
        window.alert("ログインしました");
      }
      else
      {
        window.alert("ログインに失敗しました");
      }
    });
  }
}
