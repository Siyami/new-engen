import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors; 

  constructor(
    private http: HttpService
  ) {}

  ngOnInit() {
    this.colors = [];
    this.http.getColors().subscribe((res : any[])=>{
      if(res !== undefined || res !== null) {
        this.colors = res.matching_colors;
        
        this.removeIfEmpty();

      }
    });
  }

  loadMoreColors() {
    this.http.getColors().subscribe((res : any[])=>{
      debugger
      this.colors = this.colors.concat(res.matching_colors);
      this.removeIfEmpty();
    });
  }
  
  // check if hex color is now empty, if it is remove it from the array
  removeIfEmpty() {
    for(let i = 0; i < this.colors.length; i++) {
      if(this.colors[i].length === 0) this.colors.splice(i, 1);
    }
  }
}
