import { Component, OnInit } from '@angular/core';
import { UserProfileService } from "app/core/user-profile.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private UserProfileService: UserProfileService,
  ) { }

  ngOnInit() {
  }

  /**
   * ログインする
   * @returns { void }
   */
  login(): void { }
}
