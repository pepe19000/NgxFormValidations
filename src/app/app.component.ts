import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'mat-fv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testForm: FormGroup;
  title = 'FormValidation';

  constructor(private formBuilder: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.maxLength(5)]],
        familyName: [null, [Validators.required, Validators.maxLength(5)]],
        checkboxes: this.formBuilder.array([]),
    });

    var checkboxFormArray = this.testForm.get('checkboxes') as FormArray;
    [1, 2].forEach(item => {
      checkboxFormArray.push(this.checkboxFormGroupGenerate());
    });
  }

  checkboxFormGroupGenerate(): FormGroup {
    return this.formBuilder.group({
        checked: [false, Validators.requiredTrue]
    });
  }

  get formCheckboxDataArray() { 
    return <FormArray>this.testForm.get('checkboxes'); 
  }

  onSubmit(form: FormGroup){
      if (form.invalid) {
          return;
      }
      
      //Form action
  }

  resetForm(ngForm: FormGroupDirective) {
    ngForm.resetForm();
  }
}
