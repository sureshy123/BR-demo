import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  selected:string = this.data.currentRoute;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  toggleLink(sel: string) {
    this.selected = sel;
    this.data.currentRoute = sel;
  }

}
