import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ClockService {

constructor(private http:HttpClient) { }

// method to get days data using HttpClient and return it as an Observable
GetDayData():Observable<any>{

  // Makes a GET request to the specified URL to retrieve the days data from json file
  return this.http.get('https://raw.githubusercontent.com/koanlogic/libu/master/example/json/test/weekdays.json'); 
  }
}

