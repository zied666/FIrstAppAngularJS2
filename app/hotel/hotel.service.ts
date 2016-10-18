import {Injectable}    from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hotel} from './hotel';


@Injectable()
export class HotelService {
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private heroesUrl = 'http://os-travel.com/api/hotels';  // URL to web api
    constructor(private http: Http) {
    }

    getHotels(search): Promise<Hotel[]> {
        let params = new URLSearchParams();
        params.set('nuitees', search.nuitees); // the user's search value
        params.set('checkIn', search.checkIn);
        params.set('limit', search.limit);
        params.set('offset', search.offset);
        params.set('search', search.nom);
        params.set('ville', search.ville);
        params.set('etoile', search.etoiles);
        params.set('orderBy', search.orderBy);
        params.set('order', search.order);
        return this.http.get(this.heroesUrl, {search: params})
            .toPromise()
            .then(response => response.json() as Hotel[])
            .catch(this.handleError);
    }

}