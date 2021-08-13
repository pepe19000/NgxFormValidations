# NgxFormValidations

This is an Angular module. It helps with easy validation of forms.

[![npm downloads](https://img.shields.io/npm/dm/ngx-form-validations.svg)](http://npm-stat.com/charts.html?package=ngx-form-validations)

Check out [the demo](https://pepe19000.github.io/Demo/menu/NgxFormValidations)!

*Note: v12.2.1 is out and supports Angular 12!*

## Install

1) Install by running `npm install ngx-form-validations`

2) Add `NgxFormValidationsModule` to your `app.module.ts` imports:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxFormValidationsModule } from 'ngx-form-validations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormValidationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

*Important: This module use FormGroupDirective, so import of ReactiveFormsModule to Module is IMPORTANT!!*

## Basics

### Errors

It takes validation messages from FromControl's Validators property, so you don't have to worry about that.
There are basic validation messages for all Validators what you can override. Below I will describe how to do it.

### Usage

This module not contains extra dark magic. Only you have to mark the whole form, form-group sections, input's name (label) container and where you want to display the error messages.

Validation messages appear when form is submitted or the field is dirty.

Messages display with `text-danger` class. If you would like to override this class, you can do this with stylesheet. 

`app.component.ts`

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
        name: [null, [Validators.required, Validators.maxLength(5)]],
    });
  }

  onSubmit(form: FormGroup){
    if (form.invalid) {
        return;
    }

    //Form action
  }
}
```

`app.component.html`

*Note: You can use it with Angular Material*

```html
<!-- Mark the form and pass FormGroupDirective for it via ngxFvControl attribute -->
<form [formGroup]="testForm" (ngSubmit)="onSubmit(testForm)" #fd="ngForm" [ngxFvControl]="fd"> 
    <!-- Create group sections each form element -->
    <ngx-fv-validate [control]="testForm.controls.name">
        <mat-form-field>
            <!-- Mark label container with #ngxFvName -->
            <mat-label #ngxFvName>
                Name
            </mat-label>
            <input type="text" matInput formControlName="name">
            <!-- Show where you want to see the errors -->
            <mat-error>
                <ngx-fv-error></ngx-fv-error>
            </mat-error>                  
        </mat-form-field>
    </ngx-fv-validate>
     <div>
        <button class="button" type="submit">Save</button>
    </div>
</form>
```

If you would like to use input placeholder or MatCheckBox, it's recommended to mark <ngx-fv-validate> tag with 'labelName' attribute, which contains input's label name.

```html
<ngx-fv-validate [control]="testForm.controls.name" labelName='Test label name'>
....
</ngx-fv-validate>
```

*Note: Or without Angular Material*

In case of mark input with #ngxFvFormControl then It will get a
1. 'is-invalid' class if (Form is submitted or FormControl is dirty) and FormControl is not valid
2. 'is-valid' class if (Form is submitted or FormControl is dirty) and FormControl is valid

```html
<!-- Mark the form and pass FormGroupDirective for it via ngxFvControl attribute -->
<form [formGroup]="testForm" (ngSubmit)="onSubmit(testForm)" #fd="ngForm" [ngxFvControl]="fd"> 
      <!-- Create group sections each form element -->
      <ngx-fv-validate [control]="testForm.controls.name">
          <!-- Mark label container with #ngxFvName -->
          <label #ngxFvName>
              Name
          </label>
          <input #ngxFvFormControl type="text" formControlName="name">
          <!-- Show where you want to see the errors -->
          <ngx-fv-error></ngx-fv-error>
      </ngx-fv-validate>
      <div>
          <button class="button" type="submit">Save</button>
      </div>
</form>
```

## Override Default Error Messages

### Simple way

You can easily create a const variable what return with a INgxFormValidationsConfig.
Default config looks like this:

```ts
import { INgxFormValidationsConfig } from 'ngx-form-validation'

export const CustomNgxFormValidationsConfig: INgxFormValidationsConfig = 
    {
      "required": requiredConfig,
      "minlength": minlengthConfig,
      "maxlength": maxlengthConfig,
      "requiredTrue": requiredTrueConfig,
      "pattern": patternConfig,
      "email": emailConfig,
      "max": maxConfig,
      "min": minConfig
    };

export function requiredConfig(label: string) {  
  return `'${label}' field is required`;
}
export function minlengthConfig(label: string, error: any) {
  return `${label} field must be no longer than ${error.requiredLength} characters`;
}
export function maxlengthConfig(label: string, error: any) {
  return `'${label}' field must be no longer than ${error.requiredLength} characters`;
}
export function requiredTrueConfig(label: string) {
  return `${label} field is required`;
}
export function patternConfig(label: string) {
  return `${label} field is invalid`;
}
export function emailConfig(label: string) {
  return `Invalid email address`;
}
export function maxConfig(label: string, error: any) {  
  return `${label} field must be no greater than ${error.max}`;
}
export function minConfig(label: string, error: any) {
  return `${label} field must be no less than ${error.min}`;
}
```

In this config you can write custom validation types which of course are not included in this.
After you created this file you have to override the default config with new one.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxFormValidationsModule } from 'ngx-form-validations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormValidationsModule
  ],
  providers: [{
    provide: NgxFormValidationsConfig,
    useValue: CustomNgxFormValidationsConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

If you would like to use a TranslateService or other Serivice what you would like to give to this config for example a dependency, you have to create a factory instead of const variable

```ts
import { INgxFormValidationsConfig } from "ngx-form-validations";

export function CustomNgxFormValidationsConfig(translateService: TranslateService): INgxFormValidationsConfig {
    return {
        "required": requiredConfig,
        "minlength": minlengthConfig,
        "maxlength": maxlengthConfig,
        "requiredTrue": requiredTrueConfig,
        "pattern": patternConfig,
        "email": emailConfig,
        "max": maxConfig,
        "min": minConfig
      };
}

...

```

After that change default config with a factory:

```ts
@NgModule({
  ...
  import { NgxFormValidationsConfig, NgxFormValidationsModule } from 'ngx-form-validations';
  ...
  providers: [{
    provide: NgxFormValidationsConfig,
    useFactory: CustomNgxFormValidationsConfig,
    deps: [TranslateService],
  }],
  ...
})
export class AppModule {}
```