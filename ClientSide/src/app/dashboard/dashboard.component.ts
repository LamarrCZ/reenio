import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AppConfigService } from '../services/app-config-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public containers: Array<Object>;
  public containersCount: number;

  public actualTime: Date;

  public dataFromServer: any = null;

  @ViewChild('dashboard', {static: false}) dashboardElement: ElementRef;

  constructor(private service:AppConfigService) {
    //Load containers from config file
    this.containers = service.containers;
    this.containersCount = this.containers.length;

    //Simulate date for testing
    this.actualTime = new Date(2020, 2, 8, 4, 0, 0);
  }

  public ngOnInit() {
    
  }
}
