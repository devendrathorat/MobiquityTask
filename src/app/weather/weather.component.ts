import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherServiceService) { }

  cityList = [];
  weatherForecastData: any;
  errorMessage: string;
  
  ngOnInit() {
  
    this._weatherService.getFiveCityWeather()
    .subscribe(data => {
      this.cityList = data.list
    }, error => this.errorMessage = <any>error);
  }

  getWeatherData(cityName: string) {
    this._weatherService.getWeatherForecast(cityName)
      .subscribe(data => {
        this.weatherForecastData = data.list
      }, error => this.errorMessage = <any>error);

  }

}
