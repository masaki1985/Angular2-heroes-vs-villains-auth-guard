import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = '/api/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http,
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(res => res.json().data as Hero[]);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get(url)
                    .map(res => res.json().data as Hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
                    .map(() => hero);
  }

  createHero(name: string): Observable<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
                    .map(res => res.json().data);
  }

  deleteHero(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    
    return this.http.delete(url, {headers: this.headers})
                    .map(() => null);
  }

}
