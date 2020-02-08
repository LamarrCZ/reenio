import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfigService } from './app-config-service.service';

import { ApiResponse } from '../models/ApiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient, private appConfigService: AppConfigService) { }

  getReservations():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.appConfigService.apiBaseUrl);
  }
}
