import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  BASE_API_URL = 'http://localhost:4200/api'

  constructor(private http: HttpClient) {
  }

  findLocation(location: string){
    return this.http.get(`${this.BASE_API_URL}/api/location/search/?query=${location}`)
      .pipe(
        tap(console.log)
      );
}

}
