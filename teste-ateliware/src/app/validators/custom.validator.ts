import { FormControl, AbstractControl } from '@angular/forms';

export class CustomValidator {
    static LanguageValidator(control: FormControl) {
        if (control.value == 0) {
            return true;
        }

        return null;
    }
}