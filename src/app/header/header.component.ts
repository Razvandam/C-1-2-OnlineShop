import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
// header.component.ts
export class HeaderComponent {
  siteSlogan: string = 'Do SHOP not eat when depressed!';
  getSlogan() {
    return 'this is a new slogan for this web applicaiton';
  }
  source: string = '../../assets/shopping.jpg';
}
