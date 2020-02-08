import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './services/app-config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: String;

  constructor(private service: AppConfigService) {}

  public ngOnInit() {
    this.title = this.service.dashboardTitle;
    console.log(this.title);
  }
}
