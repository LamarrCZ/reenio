import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Observable, timer, Subscription } from 'rxjs';

import { AppConfigService } from '../services/app-config-service.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  @ViewChild('container', {static: false, read: ElementRef}) 
  private containerElement: ElementRef;

  @Input() 
  private reservation: Reservation;
  private start: Date;
  private end: Date;
  private diff: number;

  private actualTime: Date;

  public computedWidth: number;
  public computedX: number;

  private everySecond: Observable<number> = timer(0, 1000);
  private subscription: Subscription;

  constructor(private service: AppConfigService) { 
    this.actualTime = new Date(2020, 1, 8, 4, 0, 0);

    this.subscription = this.everySecond.subscribe((seconds) => {
      //Do recalculations here
      this.actualTime.setSeconds(this.actualTime.getSeconds() + 1);

      console.log(this.actualTime);
      console.log(this.start);

      let newDiff = (this.start.getTime() - this.actualTime.getTime()) / 1000;
      let newX = newDiff * this.service.scaling + this.service.startPoint;

      this.computedX = newX;
      //this.containerElement.nativeElement.style.left = this.computedX;

      console.log("tick");
    });
  }

  public ngOnInit() {
    this.start = new Date(Date.parse(this.reservation.start));
    this.end = new Date(Date.parse(this.reservation.end));
    //Get difference between dates, then calculate it to width of object.
    this.diff = (this.end.getTime() - this.start.getTime()) / 1000;
    
    this.computedWidth = this.diff * this.service.scaling;
  }

}
