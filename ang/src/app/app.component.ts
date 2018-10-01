import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

class Data {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  configUrl = 'http://localhost:3000/url';

  title = 'ang';
  items: Data[];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getDatas();
  }

  getDatas() {
    this.http.get<Data[]>(this.configUrl).subscribe(
      (res: Data[]) => {
        this.items = res;
      }
    );
  }

  updateData(item: Data) {
    item.name += 'a';
    this.http.post<Data>(this.configUrl, item, httpOptions).subscribe(
      (res: any) => {
        console.log('updateData', res);
      }
    );
  }

}
