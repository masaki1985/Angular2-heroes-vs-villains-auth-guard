import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService, LoginRequest } from "app/core/user-profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //TODO
  //テスト用アカウント　ログインOK
  loginRequest: LoginRequest = {
    email: 'hero@example.com',
    password: 'password',
  };
  //テスト用アカウント　ログインNG
  loginRequest2: LoginRequest = {
    email: 'sample@example.com',
    password: 'password',
  };

  visitor: LoginRequest = {
    email: '',
    password: '',
  };

  constructor(
    private UserProfileService: UserProfileService,
    private router: Router,
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
        this.router.navigateByUrl('');
      }
      else
      {
        window.alert("ログインに失敗しました");
      }
    });
  }
}
