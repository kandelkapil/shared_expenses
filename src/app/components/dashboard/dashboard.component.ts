import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVBAR_ITEMS } from './navbarItems'
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule,BarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  selectedButton: string = NAVBAR_ITEMS.Dashboard;
  navbarItems: string [] = Object?.values(NAVBAR_ITEMS);

  setSelected(button: string) {
    this.selectedButton = button;
  }

}
