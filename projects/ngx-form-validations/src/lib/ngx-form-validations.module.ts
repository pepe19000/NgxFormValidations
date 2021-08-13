import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFormValidationsControlComponent } from './Components/ngx-form-validations-control.component';
import { NgxFormValidationsErrorComponent } from './Components/ngx-form-validations-error.component';
import { NgxFormValidationsValidateComponent } from './Components/ngx-form-validations-validate.component';
import { NgxFormValidationsConfig } from './ngx-form-validations.config';

@NgModule({
  declarations: [
    NgxFormValidationsErrorComponent,
    NgxFormValidationsValidateComponent,
    NgxFormValidationsControlComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxFormValidationsErrorComponent,
    NgxFormValidationsValidateComponent,
    NgxFormValidationsControlComponent
  ],
  providers: [{
    provide: NgxFormValidationsConfig,
    useValue: NgxFormValidationsConfig,
  }]
})
export class NgxFormValidationsModule { }
