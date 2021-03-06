import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //readonly host: string = "http://localhost:8080";
  private readonly host: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  register(data: FormData){
    return this.http.post(this.host + "/AuthenticationRestController/register", data);
    //return this.http.post(this.host + "/AuthenticationRestController/registerServeurFile", data);
  }
  
}
