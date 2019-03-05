import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit, AfterViewInit {

  @Input() companyData: Array<object>;
  constructor() {
    setTimeout(() => {
      console.log('TCL: CompaniesListComponent -> companyData', this.companyData);
    }, 500);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
