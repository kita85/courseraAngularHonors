import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  jobTitles: any = ["Web Designer","Software Engineer"];
  jobTitle: string = "Software Engineer";
  index: number = 0;
  timer: any;

  constructor() { }

  ngOnInit() {

    this.timer = setInterval(() => {
      this.jobTitle = this.jobTitles[this.index];
      this.index = (this.index + 1) % this.jobTitles.length;
    }, 3000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
