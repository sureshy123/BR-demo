
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { stringify } from '@angular/compiler/src/util';
//import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor () {
  };

  ngOnInit() {
    }


  title = 'bottle-rocket';
}
