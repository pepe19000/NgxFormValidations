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

    var rolesFormGroup = this.testForm.get('checkboxes') as FormArray;
    ["Checkbox 1", "Checkbox 2"].forEach(role => {
        rolesFormGroup.push(this.checkboxFormGroupGenerate(role));
    });
  }

  checkboxFormGroupGenerate(data: string): FormGroup {
    return this.formBuilder.group({
        name: [data],
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
