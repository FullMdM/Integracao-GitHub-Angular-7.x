import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class RepositoryService extends BaseService {

    constructor(public http: HttpClient) {
        super();
    }
}