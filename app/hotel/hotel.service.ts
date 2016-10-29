import {Injectable}    from '@angular/core';
import { Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hotel, Details} from './hotel';
import {Observable} from "rxjs";
import "rxjs";
import "rxjs/Rx";

@Injectable()
export class HotelService {
    private heroesUrl = 'http://os-travel.com/api/hotels';  // URL to web api
    constructor(private http: Http) {
    }

    getHotels(search): Observable<Hotel[]> {
        let params = new URLSearchParams();
        params.set('nuitees', search.nuitees ); // the user's search value
        params.set('checkIn', search.checkIn);
        params.set('limit', search.limit);
        params.set('offset', search.offset);
        params.set('search', search.nom);
        params.set('ville', search.ville);
        params.set('etoile', search.etoiles);
        params.set('orderBy', search.orderBy);
        params.set('order', search.order);
        return this.http.get(this.heroesUrl, {search: params})
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getHotel(id): Observable<Details> {
        return this.http.get(this.heroesUrl+'/'+id)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}