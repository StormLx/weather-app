import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../service-api/weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    console.log("home component created.")
    this.weatherService.findLocation('Paris').subscribe();
  }





}
