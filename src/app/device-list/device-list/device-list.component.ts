import { Component, inject } from '@angular/core';
import { DeviceListService } from '../../data/services/device-list.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [ MatTableModule ],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss',
})
export class DeviceListComponent {
  deviceListService = inject(DeviceListService);
  columnsToDisplay:string[] = ['id', 'name', 'last_active'];
  devices: any = [];

  constructor() {
    this.deviceListService.getDeviceList().subscribe((data) => {
      this.devices = data;
      this.devices = this.devices.data.metering_devices.data;
      console.log(this.devices);
    });
  }
}
