import { AfterContentInit, Component, ContentChildren, Input } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";
import { NgxFormValidationsValidateComponent } from "./ngx-form-validations-validate.component";

@Component({
    selector: '[ngxFvControl]',
    template: '<ng-content></ng-content>',
})
export class NgxFormValidationsControlComponent implements AfterContentInit {

    @Input() ngxFvControl: FormGroupDirective;
    @ContentChildren(NgxFormValidationsValidateComponent, { descendants: true }) private autoValidateComponents: NgxFormValidationsValidateComponent[];

    constructor() {
        
    }

    ngAfterContentInit() {
        if(this.autoValidateComponents && this.autoValidateComponents.length > 0){
            this.autoValidateComponents.forEach(avc => avc.init(this.ngxFvControl))
        }
    }
}