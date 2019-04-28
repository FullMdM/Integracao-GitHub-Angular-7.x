import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../models/repository';
import { isEmpty } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'repository-details',
    templateUrl: './repository-details.component.html',
    styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {
    repository: any[];
    propertyNames: any[];
    nestedObject: any[];
    id: number;

    constructor(private _route: Router, private _repositoryService: RepositoryService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];

            this._repositoryService.get(this.id).subscribe((result) => {
                //Dinamicamente carrega todos os campos do repositório.
                this.repository = result;
                this.propertyNames = Object.getOwnPropertyNames(result);
            });
        });
    }

    isNestedObject(index: string): boolean {
        let a = this.repository[index];
        //Verifica se a variável genérica é um objeto
        return typeof (a) == 'object';
    }
}