import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tableHeaders, transactionList } from './tableList';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.scss',
})

export class NotificationPanel {

  tableMode: boolean = false;
  tableHeaders: { id: number, title: string, show: boolean, sort: boolean, className: string | null }[] = tableHeaders;
  transactionList: {
    date: Date;
    name: string;
    lastUpdated: Date;
    paidBy: string;
    involvees: string[];
    image?: string;
  }[] = transactionList;

  constructor() { }

}
