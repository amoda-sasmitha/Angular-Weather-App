import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { user } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { }

  getWeather(city : string) : Observable<user[]>
  {
    return this.http.get<user[]>('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9c99b61156bfd95a6c691360eb06c641')
  }

  getWeatherForcast(city : string) : Observable<user[]>
  {
    return this.http.get<user[]>('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&mode=json&appid=9c99b61156bfd95a6c691360eb06c641')
  }


  
} 
