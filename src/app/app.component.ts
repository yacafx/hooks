import { Component, OnInit } from '@angular/core';

// For check if TrackJs is already loaded
declare var trackJs: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myHoocks';

  ngOnInit() {
    this.sum(2, 10);
  }

  sum(a, b) {
    const result = a - b;

    const error = {
      data: result,
      message: 'Numbers must be natural numbers',
      status: false
    };

    if (result < 0) {
      // Check if TrackJs is already loaded
      if (trackJs) {
        trackJs.track('Usando trackJs.track()', error);
      }
      console.error('Usando console.error()', error);
    }
  }
}
