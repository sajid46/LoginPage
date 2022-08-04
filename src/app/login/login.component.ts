import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
// username!: string;

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', (Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  }

  submit(){}

}
