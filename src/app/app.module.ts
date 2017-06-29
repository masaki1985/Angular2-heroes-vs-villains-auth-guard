import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroService } from './heroes/shared/hero.service';
import { ZeroPaddingPipe } from './shared/zero-padding.pipe';
import { VillainComponent } from './villains/villain/villain.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainListComponent } from './villains/villain-list/villain-list.component';
import { VillainService } from './villains/shared/villain.service';
import { UserProfileService } from "app/core/user-profile.service";
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from "app/core/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    HeroListComponent,
    ZeroPaddingPipe,
    VillainsComponent,
    VillainComponent,
    VillainListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
    VillainService,
    UserProfileService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
