import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hasilpoling',
  templateUrl: './hasilpoling.page.html',
  styleUrls: ['./hasilpoling.page.scss'],
})
export class HasilpolingPage implements OnInit {

    constructor() { }
  
    ngOnInit() {
      }

    }







    
    // import { Component, OnInit, OnDestroy } from '@angular/core';
    // // import {HttpClient, interval, Subscription } from '@angular/common/http';
    
    // @Component({
    //   selector: 'app-hasilpoling',
    //   templateUrl: './hasilpoling.page.html',
    //   styleUrls: ['./hasilpoling.page.scss'],
    // })
    // // export class HasilpolingPage implements OnInit {
    // export class HasilpolingPage implements OnInit, OnDestroy {
    //   private pollingSubscription: Subscription;
    //   dataItems: any[] = [];
    
    //   constructor(private http: HttpClient) {}
    
    //   ngOnInit() {
    //     // Memulai polling
    //     this.pollingSubscription = this.startPolling();
    //   }
    
    //   ngOnDestroy() {
    //     // Berhenti polling saat komponen dihancurkan (misalnya saat navigasi)
    //     this.pollingSubscription.unsubscribe();
    //   }
    
    //   startPolling(): Subscription {
    //     const pollInterval = 5000;
    
    //     return interval(pollInterval).subscribe(() => {
    //       this.getDataFromServer();
    //     });
    //   }
    
    //   getDataFromServer() {
    //     this.http.get('https://example.com/api/data').subscribe((response: any) => {
    //       // Mengupdate dataItems dengan data yang diterima dari server
    //       this.dataItems = response.data;
    //     });
    //   }
    // }