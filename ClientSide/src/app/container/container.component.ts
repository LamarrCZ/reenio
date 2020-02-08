import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

import { Reservation } from '../models/Reservation';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input()
  private placeId: number;

  private reservations: Reservation[];

  constructor(private service: ReservationService) { }

  ngOnInit() {
    this.service.getReservations().subscribe(reservations => {
      this.reservations = reservations.list;
    });
  }
}
