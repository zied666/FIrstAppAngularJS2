import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import "rxjs";
import "rxjs/Rx";
import {Hotel, Details} from "./object/hotel";

@Injectable()
export class HotelService {
    private uri="http://os-travel.com/api/";
    constructor(private http: Http) {
    }

    getHotels(search): Observable<Hotel[]> {
        let params = new URLSearchParams();
        params.set('nuitees', search.nuitees);
        params.set('checkIn', search.checkIn);
        params.set('limit', search.limit);
        params.set('offset', search.offset);
        params.set('search', search.nom);
        params.set('ville', search.ville);
        params.set('etoile', search.etoiles);
        params.set('orderBy', search.orderBy);
        params.set('order', search.order);
        return this.http.get(this.uri+"hotels", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getCount(search): Observable<number> {
        let params = new URLSearchParams();
        params.set('nuitees', search.nuitees);
        params.set('checkIn', search.checkIn);
        params.set('search', search.nom);
        params.set('ville', search.ville);
        params.set('etoile', search.etoiles);
        params.set('orderBy', search.orderBy);
        params.set('order', search.order);
        return this.http.get(this.uri+"hotelscount", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPrice(id, search): Observable<any> {
        let params = new URLSearchParams();
        params.set('nuitees', search.nuitees);
        params.set('checkIn', search.checkIn);
        params.set('hotel', id);
        params.set('rooms', search.rooms);
        return this.http.get(this.uri+"price", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getHotel(id): Observable<Details> {
        return this.http.get(this.uri+"hotels" + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getSaisons(id): Observable<Object[]> {
        return this.http.get(this.uri+"hotels" + '/' + id + '/saisons')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}