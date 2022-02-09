import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxFormValidationsConfig, NgxFormValidationsModule } from 'ngx-form-validation'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CustomNgxFormValidationsConfig } from 'src/core/validation/custom-ngx-form-validation.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxFormValidationsModule
  ],
  providers: [{
    provide: NgxFormValidationsConfig,
    useValue: CustomNgxFormValidationsConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
