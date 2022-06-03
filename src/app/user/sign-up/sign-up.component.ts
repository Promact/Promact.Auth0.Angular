import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  protected readonly singupForm: FormGroup;

  constructor() {
    this.singupForm = new FormGroup({
      email: new FormControl('', { nonNullable: true }),
    });
  }


  ngOnInit(): void {
  }

}
