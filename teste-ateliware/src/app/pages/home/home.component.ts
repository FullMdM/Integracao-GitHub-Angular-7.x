import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service'
import { Language } from '../../models/language';
import { CustomValidator } from '../../validators/custom.validator';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    filtroForm: FormGroup;
    languages: Language[];

    constructor(private _formBuilder: FormBuilder, private _route: Router, private _languageService: LanguageService) {
        this.filtroForm = _formBuilder.group({
            language: [0, [Validators.required, CustomValidator.LanguageValidator]],
            term: ['']
        });
    }

    ngOnInit() {
        this._languageService.get().subscribe((result: Language[]) => {
            this.languages = result;
        });
    }

    searchRepositories() {
        if (this.filtroForm.value.language != 0)
            this._route.navigate(["/repository", this.filtroForm.value.language, this.filtroForm.value.term]);
    }
}
