import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMobile = false;
  constructor(private deviceDetector: DeviceDetectorService){}

  ngOnInit() {
   this.isMobile = this.deviceDetector.isMobile();
  }
}
