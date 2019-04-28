import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class LanguageService extends BaseService {

    constructor(public http: HttpClient) {
        super();
    }

    get() {
        return this.http.get<any>(`${this.apiUrl}v1/getlanguages`).pipe(map(result => result.data));
    }
}