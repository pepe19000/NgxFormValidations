import { Component } from "@angular/core";
import { AbstractControl, FormGroupDirective } from "@angular/forms";
import { INgxFormValidationsError } from "../Models/ngx-form-validations-error.model";
import { NgxFormValidationsService } from "../Services/ngx-form-validations.service";

@Component({
    selector: 'ngx-fv-error',
    templateUrl: './ngx-form-validations-error.component.html',
    providers: [NgxFormValidationsService]
})
export class NgxFormValidationsErrorComponent {

    private control: AbstractControl;
    private labelName: string;
    private form: FormGroupDirective;

    constructor(private autoValidateService: NgxFormValidationsService) {
        
    }

    convertObjectToArray(obj: { [x: string]: any; }): INgxFormValidationsError[]{
        if(obj)
            return Object.keys(obj).map(key => ({type: key, value: obj[key]}))
        
        return [];
    }

    getErrorMessage(error: INgxFormValidationsError): string{
        return this.autoValidateService.getErrorMessage(error, this.labelName);
    }

    init(form: FormGroupDirective, control: AbstractControl, labelName: string) {
        this.control = control;
        this.labelName = labelName;       
        this.form = form;
    }
}