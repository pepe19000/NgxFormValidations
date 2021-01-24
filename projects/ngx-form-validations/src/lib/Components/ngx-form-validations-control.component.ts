import { AfterContentInit, Component, ContentChild, Input } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";
import { NgxFormValidationsValidateComponent } from "./ngx-form-validations-validate.component";

@Component({
    selector: '[ngxFvControl]',
    template: '<ng-content></ng-content>',
})
export class NgxFormValidationsControlComponent implements AfterContentInit {

    @Input() private ngxFvControl: FormGroupDirective;
    @ContentChild(NgxFormValidationsValidateComponent) private autoValidateComponent: NgxFormValidationsValidateComponent;

    constructor() {
        
    }

    ngAfterContentInit() {
        this.autoValidateComponent.init(this.ngxFvControl);
    }
}