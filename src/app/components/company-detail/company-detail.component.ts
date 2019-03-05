import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit, AfterViewInit {

  @Input() companyData: Array<object>;
  @ViewChild('carousel') carousel: ElementRef;
  constructor() {
    setTimeout(() => {
      console.log('TCL: CompanyDetailComponent -> companyData', this.companyData);
    }, 500);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      M.Carousel.init(this.carousel.nativeElement, {
        fullWidth: true,
        indicators: true
      });
    }, 200);
  }
}
