import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class RepositoryService extends BaseService {

    constructor(public http: HttpClient) {
        super();
    }

    get(id: number) {
        return this.http.get<any>(`${this.apiUrl}v1/repository/${id}`).pipe(map(result => result.data));
    }

    getList() {
        return this.http.get<any>(`${this.apiUrl}v1/listrepositories`).pipe(map(result => result.data));
    }
}