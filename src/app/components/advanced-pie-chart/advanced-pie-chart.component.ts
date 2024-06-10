import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  imports: [NgxChartsModule],
  styleUrls: ['./advanced-pie-chart.component.scss'],
  standalone: true
})
export class AdvancedPieChartComponent implements OnInit {
  @ViewChild('customTooltipTemplate', { static: true }) customTooltipTemplate!: TemplateRef<any>;

  percentageValue : string = '90%';

  view: [number,number] = [165, 165];

  // options
  showLegend = false;
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  gradient = true;

  colorScheme :any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  data = [
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italy",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  tooltipText(data: any): string {
    return `${data.name}: ${data.value}`;
  }

}
