import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {
  view: [number, number] = [280, 300];
  data = [
    {
      "name": "Suriname",
      "series": [
        {
          "value": 3539,
          "name": "August"
        },
        {
          "value": 3091,
          "name": "September"
        },
        {
          "value": 4989,
          "name": "January"
        },
        {
          "value": 6941,
          "name": "February"
        },
        {
          "value": 3774,
          "name": "March"
        }
      ]
    },
    {
      "name": "Djibouti",
      "series": [
        {
          "value": 5649,
          "name": "August"
        },
        {
          "value": 4533,
          "name": "September"
        },
        {
          "value": 6403,
          "name": "January"
        },
        {
          "value": 5508,
          "name": "February"
        },
        {
          "value": 5689,
          "name": "March"
        }
      ]
    },
    {
      "name": "Macedonia",
      "series": [
        {
          "value": 5855,
          "name": "August"
        },
        {
          "value": 3328,
          "name": "September"
        },
        {
          "value": 6170,
          "name": "January"
        },
        {
          "value": 6756,
          "name": "February"
        },
        {
          "value": 2698,
          "name": "March"
        }
      ]
    },
    {
      "name": "Congo",
      "series": [
        {
          "value": 4330,
          "name": "August"
        },
        {
          "value": 5235,
          "name": "September"
        },
        {
          "value": 4854,
          "name": "January"
        },
        {
          "value": 5923,
          "name": "February"
        },
        {
          "value": 6946,
          "name": "March"
        }
      ]
    },
    {
      "name": "India",
      "series": [
        {
          "value": 4804,
          "name": "August"
        },
        {
          "value": 3816,
          "name": "September"
        },
        {
          "value": 4460,
          "name": "January"
        },
        {
          "value": 5317,
          "name": "February"
        },
        {
          "value": 6967,
          "name": "March"
        }
      ]
    }
  ]
  colorScheme: any = {
    domain: ['#FF0000', '#00FF00', '#0000FF']
  };
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Month';
  showYAxisLabel = false;
  yAxisLabel = 'Value';
}
