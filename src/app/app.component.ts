import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
