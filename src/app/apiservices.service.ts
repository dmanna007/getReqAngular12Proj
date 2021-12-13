import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServicesService {
  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  GetData(){
    return this.http.get(this.url);
  }
}
