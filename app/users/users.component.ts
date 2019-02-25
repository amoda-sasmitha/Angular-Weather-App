import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { user } from '../user.model';
import { template } from '@angular/core/src/render3';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  public user = [];
  public user1 = [];
  public temp : number;
  constructor(private data : DataService) { }

  

  ngOnInit() {

    
   
   let city = 'Colombo';
  this.weatherdata(city);
   this.weatherForcastdata(city);
     this.gethours() ;
  }
  onClickMe(city : string)
  {
    this.weatherdata(city);
    this.weatherForcastdata(city);
  }

  kelvintoCelcius(temp : number)
  {
    return temp-273.15;
  }

  weatherdata(city : string)
  {
   return this.data.getWeather(city).subscribe(  data => this.user  = data);
  }

  weatherForcastdata(city : string)
  {
   return this.data.getWeatherForcast(city).subscribe(  data1 => this.user1  = data1);
  }

  speedinkmh(speed : number)
  {
    return speed * 3.6;
  }

  dateformat(date : number)
  {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(date);
  return d;
  }

  getTime()
  {
    var today =  new Date();
    
    return today;
  }

  gethours()
  {
    var d = new Date();
     if( d.getHours() >= 18 || d.getHours() < 6 )
     {
      element: HTMLImageElement;
       document.getElementById('background').style.backgroundImage = "url('../../assets/pic1.png')";
       document.getElementById('full').style.backgroundColor = "#19488e";
       document.getElementById('details').style.color = "rgba(255,255,255, 0.95)"; 
       document.getElementById('d1').style.color = "rgba(255,255,255, 0.95)"; 
       document.getElementById('d2').style.color = "rgba(255,255,255, 0.95)"; 
       document.getElementById('d3').style.color = "rgba(255,255,255, 0.95)"; 
       document.getElementById('d4').style.color = "rgba(255,255,255, 0.95)"; 
       (<HTMLImageElement>document.getElementById('icon-image1')).src = "../../assets/ciconwhite.png";
       (<HTMLImageElement>document.getElementById('icon-image2')).src = "../../assets/ciconwhite.png";
       (<HTMLImageElement>document.getElementById('ficon')).src = "../../assets/ciconwhite2.png";
       document.getElementById('sbtn').style.backgroundColor = "gray";
       document.getElementById('sbtn').style.color = "white";
       document.getElementById('sbtn').style.border = "1px solid gray";
     } 
  }

}
