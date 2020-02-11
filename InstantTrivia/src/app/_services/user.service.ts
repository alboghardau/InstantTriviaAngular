import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private httpService: HttpService) {

  }

  loginUser() {

  }

}
