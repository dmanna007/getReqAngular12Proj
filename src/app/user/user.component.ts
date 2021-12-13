import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIServicesService } from '../apiservices.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User: any;

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   let responce = this.http.get("https://jsonplaceholder.typicode.com/users");
  //   responce.subscribe(data => console.log(data));
  //   responce.subscribe((data) => this.User = data);
  // }
  
  constructor(private services: APIServicesService) { }

  ngOnInit(): void {
    //console.log(this.services.GetData());
    this.services.GetData().subscribe(data => this.User = data);
  }

}
