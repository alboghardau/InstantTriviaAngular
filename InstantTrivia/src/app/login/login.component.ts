import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit() {

  }

  createLoginForm() {
    this.loginForm = this.form.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

}
