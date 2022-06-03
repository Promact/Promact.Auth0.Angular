import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  protected readonly signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl('', { nonNullable: true }),
      password: new FormControl('', { nonNullable: true }),
      name: new FormControl('', { nonNullable: true }),
      Iagree: new FormControl(false, { nonNullable: true })
    });
  }


  ngOnInit(): void {
  }

  Register() {

  }

}
