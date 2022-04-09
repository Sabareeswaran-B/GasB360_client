import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Dashboard',
          icon: 'pi pi-server',
          routerLink:"/admin/dashboard"
      },
      {
          label: 'Farming Data',
          icon: 'pi pi-book',
          routerLink:"/agroinvest-component"
      }
      ]},
      {
          label: 'Personalized',
          items: [{
              label: 'Dashboard',
              icon: 'pi pi-desktop',
              routerLink:"/"
          },
          {
              label: 'LogOut',
              icon: 'pi pi-sign-out',
              // command: () => this.logoutme(),
               routerLink:"/agroinvest-component"
          }
      ]}
  ];
  }

}
