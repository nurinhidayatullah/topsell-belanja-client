import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath = '/assets/logo/logo.webp';
  heartIconPath = '/assets/logo/heart.svg';
  cartIconPath = '/assets/logo/cart.svg';
}
