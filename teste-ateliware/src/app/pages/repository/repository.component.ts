import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../models/repository';

@Component({
    selector: 'repository',
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
    language: number;
    term: string;
    repositories: Repository[];

    constructor(private _route: Router, private _repositoryService: RepositoryService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.language = +params['language'];
            this.term = params['term'];

            this._repositoryService.getList(this.language, this.term, 1).subscribe((result: Repository[]) => {
                this.repositories = result;
            });
        });
    }
}