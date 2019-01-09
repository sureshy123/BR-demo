import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    //this.currentRoute = 
   }

  isDetails: boolean = false;
  selectedRest: any ;
  currentRoute: any = window.location.href.includes('lunch') ? 'lunch' : 'internets';;
}
