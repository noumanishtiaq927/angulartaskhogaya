import {
  Component,
  OnInit,
  ViewChild,
  ɵpublishDefaultGlobalUtils,
} from '@angular/core';

import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-graphcard',
  templateUrl: './graphcard.component.html',
  styleUrls: ['./graphcard.component.css'],
})
export class GraphcardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
  }
  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  @ViewChild('mychart') mychart: any;
  @ViewChild('mychart2') mychart2: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas2 = this.mychart2.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');
    new Chart(this.ctx2, {
      type: 'doughnut',
      data: this.data,
    });
    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Current Vallue',
            data: [0, 20, 40, 50],
            backgroundColor: 'rgb(115 185 243 / 65%)',
            borderColor: '#007ee7',
            fill: true,
          },
          {
            label: 'Invested Amount',
            data: [0, 20, 40, 60, 80],
            backgroundColor: '#47a0e8',
            borderColor: '#007ee7',
            fill: true,
          },
        ],
        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019'],
      },
    });
  }
}
