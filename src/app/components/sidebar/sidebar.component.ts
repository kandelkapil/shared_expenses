import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() navbarItems!: string[];
  @Input() selectedNavItem!: string 
  @Input() setSelectedNavItem!: ((navItem: string) => void) 
  constructor() {}

}
