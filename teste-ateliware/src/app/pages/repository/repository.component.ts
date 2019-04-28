import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../models/repository';

@Component({
    selector: 'repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
    repositories: Repository[];

    constructor(private _route: Router, private _repositoryService: RepositoryService) {
    }

    ngOnInit() {
        this._repositoryService.getList().subscribe((result: Repository[]) => {
            this.repositories = result;
        });
    }
}
