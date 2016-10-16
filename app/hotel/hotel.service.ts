import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hotel} from './hotel';


@Injectable()
export class HotelService {
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private heroesUrl = 'http://os-travel.com/api/hotels?nuitees=1&checkIn=2016-05-05&limit=30&offset=5';  // URL to web api
  constructor(private http: Http) {
  }

  getHotels(): Promise<Hotel[]> {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json() as Hotel[])
        .catch(this.handleError);
  }

}