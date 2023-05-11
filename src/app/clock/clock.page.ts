import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ClockService } from '../Services/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.page.html',
  styleUrls: ['./clock.page.scss'],
})
export class ClockPage implements OnInit {

  public daysData: any = []; // array to hold the days data
  public today: string = ''; // string to hold the selected day
  
  //Initialises the service, storage and NavController
  constructor(public service: ClockService, private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.service.GetDayData().subscribe((data: string[]) => { // subscribes to the GetDayData() method from ClockService to retrieve days data
      console.log(data);
      this.daysData = data; // sets the days data array to the retrieved data
    });
  }

  

  async saveDay() { // saveDay method to save to storage
    await this.storage.set('clock', this.today)
      .then(() => {
        this.navCtrl.navigateBack('/clockhome'); //navigates back to the ClockhomePage when the selected day is saved successfully
      })
      .catch(error => console.log(error)); // logs any errors encountered while saving the selected day
  }
}


