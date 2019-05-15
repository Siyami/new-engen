import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: Array<string>; 

  constructor(
    private http: HttpService
  ) {}

  ngOnInit() {
    this.colors = [];
    this.http.getColors().subscribe((res : any[])=>{
      if(res !== undefined || res !== null) {
        this.colors = res.matching_colors;

      }
    });
  }

  loadMoreColors() {
    this.http.getColors().subscribe((res : any[])=>{
      this.colors.concat(res.matching_colors);
    });
  }
}
