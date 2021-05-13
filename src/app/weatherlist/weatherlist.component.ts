import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
  @Input('weatherForecastList') weathers: any;
 
  constructor() { }

  ngOnInit() {
  }

}
