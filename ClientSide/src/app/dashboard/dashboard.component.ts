import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dataFromServer: any = null;

  constructor(private httpClient: HttpClient) {
  }
  public ngOnInit() {

    const data = new FormData();
    data.set('name', 'jan');

    this.httpClient.post('./api/test', data)
      .subscribe((data) => {
        this.dataFromServer = data;
      });


  }
}
