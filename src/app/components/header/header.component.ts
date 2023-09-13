import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath = '/assets/logo/logo.webp';
  heartIconPath = '/assets/logo/heart.svg';
  cartIconPath = '/assets/logo/cart.svg';
  ellipseBg = '/assets/logo/ellipse.svg';
  starUsp = '/assets/logo/star.svg';
  badgeUsp = '/assets/logo/crew.svg';
  qrUsp = '/assets/logo/qr.svg';

  isMobile = false;
  constructor(private deviceDetector: DeviceDetectorService){}

  ngOnInit() {
   this.isMobile = this.deviceDetector.isMobile();
  }
}
