import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";

@Injectable()
export class LocalStorageService {
    static removeItem(item: string) {
        localStorage.removeItem(item);
    }

    static getItem(item: string) {
        return JSON.parse(localStorage.getItem(item));
    }

    static setItem(item: string, data: any) {
        localStorage.setItem(item, JSON.stringify(data));
    }
}