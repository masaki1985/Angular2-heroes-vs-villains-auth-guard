import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService, LoginRequest } from "app/core/user-profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    if(!this.visitor.email || !this.visitor.password) {
      return;
    }
    this.UserProfileService.login(this.visitor).subscribe(() => {
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
