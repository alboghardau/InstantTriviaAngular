import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  postData(url: string, model: any) {
    this.http.post(url, model).toPromise().then(data => {
      console.log(data);
    });
}

}
