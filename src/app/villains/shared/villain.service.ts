import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Villain } from './villain';

@Injectable()
export class VillainService {

  private villainsUrl = '/api/villains';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http,
  ) { }

  getVillains(): Observable<Villain[]> {
    return this.http.get(this.villainsUrl)
                    .map(res => res.json().data as Villain[]);
  }

  getVillain(id: number): Observable<Villain> {
    const url = `${this.villainsUrl}/${id}`;

    return this.http.get(url)
                    .map(res => res.json().data as Villain);
  }

  updateVillain(villain: Villain): Observable<Villain> {
    const url = `${this.villainsUrl}/${villain.id}`;

    return this.http
      .put(url, JSON.stringify(villain), { headers: this.headers })
                    .map(() => villain);
  }

  createVillain(name: string): Observable<Villain> {
    return this.http.post(this.villainsUrl, JSON.stringify({ name: name }), { headers: this.headers })
                    .map(res => res.json().data);
  }

  deleteVillain(id: number): Observable<void> {
    const url = `${this.villainsUrl}/${id}`;
    
    return this.http.delete(url, {headers: this.headers})
                    .map(() => null);
  }

}
