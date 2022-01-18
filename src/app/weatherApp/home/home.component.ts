import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../service-api/weather.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm = this.fb.group({
    search:['']
  })

  constructor(private weatherService: WeatherService, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const location = this.searchForm.get('search')?.value;
    location ? this.weatherService.findLocation(location).subscribe() : null;
  }
}
