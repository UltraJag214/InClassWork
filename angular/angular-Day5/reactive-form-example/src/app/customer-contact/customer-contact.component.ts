import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.css']
})
export class CustomerContactComponent implements OnInit {

  form: FormGroup
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      firstName: [ 'John' ],
      lastName: [ 'Doe' ],
      // new FormArray object:
      phoneNumbers: fb.array([fb.group({
        alias: ['Home'],
        number: ['555-555-5555']
      })]),
      // ^^^ new FormArray object ^^^
      address: fb.group({
        street: ['123 Main St.'],
        city: ['Salt Lake City'],
        state: ['UT'],
        zip: ['84001']
      })
    });
  }

  ngOnInit(): void {
  }

  onReset() {
    this.form.reset();
    this.form.get('firstName').setValue('John');
    this.form.get('lastName').setValue('Doe');
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

}
