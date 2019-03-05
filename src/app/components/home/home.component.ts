import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { BroadcastService } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  state: {[k: string]: any} = {};
  constructor(
    private restService: RestService,
    private broadcastService: BroadcastService
  ) {
    this.restService.getCompanyList().subscribe(
      (jsonData: CompanyList) => {
        if (jsonData.statusCode === 200 && jsonData.message === 'Data Fetched') {
          this.state.companies = jsonData.data;
        }
      },
      error => {
        console.error(error);
      },
      () => console.log('Observable Complete in HomeComponent')
    );
  }

  ngOnInit() {
  }

}

interface CompanyList {
  data: Array<object>;
  statusCode: number;
  message: string;
}
