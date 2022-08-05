import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordLength = 6;
  validPassword = '';
  // username!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(
        '',
        (Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'))
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.passwordLength),
      ]),
    });
  }

  // When the user starts to type something inside the password field
  onkeyup(event: any) {
    // Validate lowercase letters
    this.validPassword = '';
    const value = event.target.value;

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialCharacter = /[!@#$%^&*(),.?":{}|<>~£\-\_\\|`]/g;

    if (value.length < this.passwordLength) {
      this.validPassword =
        'Please enter minimum ' + this.passwordLength + ' characters.';
    } else {
      if (!value.match(lowerCaseLetters)) {
        this.validPassword =
          'Please enter at lease 1 lowercase character. '
      }
      else if (!value.match(upperCaseLetters)) {
        this.validPassword =
          'Please enter at least 1 uppercase character. '
      }
      else if (!value.match(numbers)) {
        this.validPassword =
          'Please enter at least 1 number. '
      }
      else if (!value.match(specialCharacter)) {
        this.validPassword =
          'Please enter at least 1 special character. '
      }
    }
  }

  submit() {}
}
