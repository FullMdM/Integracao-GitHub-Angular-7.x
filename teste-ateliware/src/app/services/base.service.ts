import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    protected apiUrl: string = environment.apiUrl;
    protected ambiente: string = environment.ambiente;

    constructor() { }
}
