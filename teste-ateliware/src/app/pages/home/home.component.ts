import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private _route: Router) {
    }
}
