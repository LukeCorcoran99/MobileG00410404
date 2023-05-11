
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
selector: 'app-clockhome',
templateUrl: 'clockhome.page.html',
styleUrls: ['clockhome.page.scss'],
})

export class ClockhomePage implements OnInit {
    today: string = ''; // initializes a string variable to hold the selected day
    thisMonth: string = ''; // initializes a string variable to hold the selected month
    thisYear: string = ''; // initializes a string variable to hold the selected year
 
    //initialises storage
    constructor(private storage: Storage) { }

    ngOnInit() {
    }

    //called when the component is about to be shown
    async ionViewWillEnter() {
    this.storage = await this.storage.create(); // creates a new instance of storage
    this.today = await this.storage.get('clock'); // retrieves the selected day from storage and sets it to the "today" variable
    this.thisMonth = await this.storage.get('clockmonth'); // retrieves the selected month from storage and sets it to the "thisMonth" variable
    this.thisYear = await this.storage.get('clockyear'); // retrieves the selected year from storage and sets it to the "thisYear" variable
    
}
    }
    
