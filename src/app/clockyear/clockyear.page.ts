
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ClockyearService } from '../Services/clockyear.service';

@Component({
  selector: 'app-clockyear',
  templateUrl: './clockyear.page.html',
  styleUrls: ['./clockyear.page.scss'],
})
export class ClockyearPage implements OnInit {

  public yearsData: any = []; // array to hold the years data
  public thisYear: string = ''; // string to hold the selected year

  //Initialises the service, storage and NavController
  constructor(public service: ClockyearService, private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.service.GetYearData().subscribe((data: string[]) => { // subscribes to the GetData() method from ClockService to retrieve years data
      console.log(data);
      this.yearsData = data; // sets the years data array to the retrieved data
    });
  }

  async saveYear() { // saveYear method to save selected year to storage
    await this.storage.set('clockyear', this.thisYear)
      .then(() => {
        this.navCtrl.navigateBack('/clockhome'); //navigates back to the ClockhomePage when the selected year is saved successfully
      })
      .catch(error => console.log(error)); // logs any errors encountered while saving the selected year
  }
}
