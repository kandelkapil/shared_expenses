// bar-chart.component.ts
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class BarChartComponent {
  view: [number, number] = [700, 400];

  // Options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  // Static data for 12 months
  data = [
    { name: 'January', value: 50 },
    { name: 'February', value: 80 },
    { name: 'March', value: 45 },
    { name: 'April', value: 90 },
    { name: 'May', value: 75 },
    { name: 'June', value: 60 },
    { name: 'July', value: 85 },
    { name: 'August', value: 70 },
    { name: 'September', value: 95 },
    { name: 'October', value: 100 },
    { name: 'November', value: 65 },
    { name: 'December', value: 85 }
  ];

  colorScheme :any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
