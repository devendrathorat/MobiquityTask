import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  appId = "3d8b309701a13f65b660fa2c64cdc517";
  baseUrl = "http://api.openweathermap.org/data/2.5/";


  //GET FIVE CITY AND WEATHER DETAILS
  getFiveCityWeather():Observable<any>{
    return this.http.get(this.baseUrl +'group?id=4517009,4717560,5083330,4219762,4865871&appid='+ this.appId);
  }

  // GET WEATHER DETAILS OF CITY
  getWeatherForecast(cityName: string): Observable<any> {

      return this.http.get(
      this.baseUrl +
      'forecast?q=' + cityName +
      '&appid=' + this.appId
    )
  }


}
