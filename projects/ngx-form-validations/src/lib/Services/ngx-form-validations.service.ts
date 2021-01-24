import { Inject, Injectable } from "@angular/core";
import { INgxFormValidationsConfig } from "../Models/ngx-form-validations-config.model";
import { INgxFormValidationsError } from "../Models/ngx-form-validations-error.model";
import { NgxFormValidationsConfig } from "../ngx-form-validations.config";

@Injectable()
export class NgxFormValidationsService {

    constructor(@Inject(NgxFormValidationsConfig) private autoValidateConfig: INgxFormValidationsConfig) {
        
    }

    getErrorMessage(error: INgxFormValidationsError, labelName: string): string {
        var validateConfig = this.autoValidateConfig[error.type];
        if(validateConfig)
            return this.autoValidateConfig[error.type](labelName, error.value);
        
        return "Not handled error";
    }

}