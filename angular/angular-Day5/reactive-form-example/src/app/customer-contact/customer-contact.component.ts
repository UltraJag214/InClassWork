import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  FormArray, 
  Validators, 
  ValidatorFn, 
  AbstractControl,
  ValidationErrors,
  FormGroupDirective
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.css']
})
export class CustomerContactComponent implements OnInit {

  form: FormGroup
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      firstName: [ 'John', Validators.required ],
      lastName: [ 'Doe', Validators.required ],
      email: [ 'john.doe@example.com', Validators.compose([ Validators.required, Validators.email ]) ],
      phoneNumbers: fb.array([ fb.group({
        alias: [ 'Home' ],
        number: [ '555-555-5555' ]
      }) ]),
      address: fb.group({
        street: [ '123 Main St.' ],
        city: [ 'Salt Lake City' ],
        state: [ 'UT' ],
        zip: [ '84001' ]
      })
    }, { validator: this.forbiddenFullNameValidator }); // <-- cross field validator registered here);
  }

  ngOnInit(): void {
  }

  customErrorStateMatcher: ErrorStateMatcher = new CustomErrorStateMatcher();

  onReset() {
    this.form.reset();
    this.form.get('firstName').setValue('');
    this.form.get('lastName').setValue('');
  }

  fillDefaultAddress() {
    this.form.patchValue({
      address: {
        street: '456 Default St',
        city: 'Defaultolopolis',
        state: 'CA',
        zip: '90000',
      }
    });
  }

  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    this.phoneNumbers.push(this.fb.group({
      alias: [''],
      number: ['']
    }));
  }

  forbiddenFullNameValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const firstName = control.get('firstName').value;
    const lastName = control.get('lastName').value;
    const fullName = `${ firstName } ${ lastName }`;
    const forbidden = new RegExp(/^[Mm]ickey [Mm]ouse$/).test(fullName);
    return forbidden ? { 'forbiddenFullName': { value: fullName } } : null;
  }

}

class CustomErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl, form: FormGroupDirective): boolean {
    return form.getError('forbiddenFullName') || control.invalid;
  }

}
