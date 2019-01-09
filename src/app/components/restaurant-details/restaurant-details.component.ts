/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  @Input() details:any;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(this.details.location.lat, this.details.location.lng),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
      
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);
      
    var infowindow = new google.maps.InfoWindow({
      content: this.details.name
    });
    
    infowindow.open(this.map, marker);
  }

}
