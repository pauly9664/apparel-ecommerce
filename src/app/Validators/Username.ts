import { FormControl } from '@angular/forms';

export class NumberValidator {

    static isValid(control: FormControl): any {
        
        if (control.value > 10){
            return {
                "not realistic phone number": true
            };
        }
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
    }
}