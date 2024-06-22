import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  standalone:true,
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChart implements OnChanges {
  @Input() value: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['value']) {
      this.updateProgressCircle(changes?.['value']?.currentValue);
    }
  }

  updateProgressCircle(value: number) {
    const boundedValue = Math.max(0, Math.min(100, value));
    document.documentElement.style.setProperty('--value', `${boundedValue}`);
  }
}
