import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {User} from '../_models/user';
import { HttpService } from './../_services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private form: FormBuilder, private httpServ: HttpService) {
    this.createLoginForm();

    this.user = new User();
    this.user.Id = 1;
    this.user.Email = 'nelu3@gmail.com';
    this.user.Password = '12345';
  }

  ngOnInit() {

  }

  login() {
    console.log(JSON.stringify(this.user));
    let data = this.httpServ.postData('http://itrivia.eu/api/user/login/', JSON.stringify(this.user));
    console.log("data" + data);
  }

  createLoginForm() {
    this.loginForm = this.form.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

}
