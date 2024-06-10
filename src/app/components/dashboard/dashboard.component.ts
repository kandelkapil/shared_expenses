import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVBAR_ITEMS } from './navbarItems'
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AreaChartComponent } from '../area-chart/area-chart.component';
import { AdvancedPieChartComponent } from '../advanced-pie-chart/advanced-pie-chart.component';
import { CircleChart } from '../circle-chart/circle-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, BarChartComponent, AreaChartComponent, SidebarComponent, AdvancedPieChartComponent, CircleChart],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  selectedNavItem: string = NAVBAR_ITEMS.Dashboard;
  navbarItems: string[] = Object?.values(NAVBAR_ITEMS);

  setSelectedNavItem(button: string) {
    this.selectedNavItem = button;
  }

}
