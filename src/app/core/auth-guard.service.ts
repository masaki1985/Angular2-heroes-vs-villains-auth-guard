import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserProfileService } from "app/core/user-profile.service";


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private userProfileService: UserProfileService,
    private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.userProfileService.loginState$.getValue();
    }
}
