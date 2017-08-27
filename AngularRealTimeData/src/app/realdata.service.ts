
import { RealPojo } from './models/realPojo';
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RealdataService {
  private _url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: Http) {}

  getHeroes() {
    return this.http.get(this._url).map((response: Response) => response.json());

  }

  private handleError(error: any): Promise<RealPojo> {
    return Promise.reject(error.message || error)

  }

}
