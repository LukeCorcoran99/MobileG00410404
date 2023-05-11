
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ClockyearService {

constructor(private http:HttpClient) { }

// method to get days data using HttpClient and return it as an Observable
GetYearData():Observable<any>{

  // Makes a GET request to the specified URL to retrieve the year data from json file
  return this.http.get('https://raw.githubusercontent.com/LukeCorcoran99/yearsjson/main/years4.json'); 
  }
}
