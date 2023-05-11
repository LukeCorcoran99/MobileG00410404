import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ClockmonthService } from '../Services/clockmonth.service';

@Component({
  selector: 'app-clockmonth',
  templateUrl: './clockmonth.page.html',
  styleUrls: ['./clockmonth.page.scss'],
})
export class ClockmonthPage implements OnInit {

  public monthsData: any = []; // array to hold the months data
  public thisMonth: string = ''; // string to hold the selected month

  //Initialises the service, storage and NavController
  constructor(public service: ClockmonthService, private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.service.GetMonthData().subscribe((data: string[]) => { // subscribes to the GetData() method from ClockService to retrieve months data
      console.log(data);
      this.monthsData = data; // sets the months data array to the retrieved data
    });
  }

  async saveMonth() { // saveMonth method to save selected month to storage
    await this.storage.set('clockmonth', this.thisMonth)
      .then(() => {
        this.navCtrl.navigateBack('/clockhome'); //navigates back to the ClockhomePage when the selected month is saved successfully
      })
      .catch(error => console.log(error)); // logs any errors encountered while saving the selected month
  }
}
