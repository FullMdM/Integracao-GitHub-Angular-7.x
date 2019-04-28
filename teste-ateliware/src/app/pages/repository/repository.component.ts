import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';

@Component({
    selector: 'repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {
    constructor(private _route: Router, private _repositoryService: RepositoryService) {
    }
}
