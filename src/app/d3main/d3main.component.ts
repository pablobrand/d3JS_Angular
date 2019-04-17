import { Component, ElementRef, OnInit } from '@angular/core';
import * as D3 from 'd3';

@Component({
  selector: 'app-d3main',
  templateUrl: './d3main.component.html',
  styleUrls: ['./d3main.component.css']
})
export class D3mainComponent implements OnInit {
  errorMessage: string;
  host;
  svg;
  constructor(private _element: ElementRef) {
    console.log(_element);
    this.host = D3.select(this._element.nativeElement);
   }

  ngOnInit() {
    this.buildSVG();
    //this.conceptMap();
  }
  buildSVG(): void{

    //var chartDiv = document.getElementById("#chart");
    // Extract the width and height that was computed by CSS.
    //var width = chartDiv.clientWidth;
    //var height = chartDiv.clientHeight;

    D3.select("#chart").text("pablo");
  

  }
}
