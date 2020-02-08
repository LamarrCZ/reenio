import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  get apiBaseUrl() {
    if(!this.appConfig) {
      throw Error('Config not loaded yet.');
    }

    return this.appConfig.apiBaseUrl;
  }

  get containers() {
    if(!this.appConfig) {
      throw Error('Config not loaded yet.');
    }

    return this.appConfig.containers;
  }

  get dashboardTitle() {
    if(!this.appConfig) {
      throw Error('Config not loaded yet.');
    }

    return this.appConfig.dashboardTitle;
  }

  get scaling() {
    if(!this.appConfig) {
      throw Error('Config not loaded yet.');
    }

    return this.appConfig.scaling;
  }

  get startPoint() {
    if(!this.appConfig) {
      throw Error('Config not loaded yet.');
    }

    return this.appConfig.startPoint;
  }
}