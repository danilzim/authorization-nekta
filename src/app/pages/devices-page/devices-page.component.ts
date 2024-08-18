import {ChangeDetectorRef, Component, inject} from '@angular/core';
import { DevicesApi } from '../../api/devices/devices.api';
import { MatTableModule } from '@angular/material/table';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Device, DevicesResponse} from "../../api/devices/devices.types";

@Component({
  selector: 'app-devices-page',
  standalone: true,
  imports: [MatTableModule, NgIf, NgForOf, MatPaginator, DatePipe],
  templateUrl: './devices-page.component.html',
  styleUrl: './devices-page.component.scss',
})
export class DevicesPageComponent {
  private devicesApi = inject(DevicesApi);

  devices: Device[] = [];
  currentPage = 1;
  devicesTotal = 0;

  readonly columnsToDisplay = ['id', 'name', 'last_active'];

  constructor() {
    this.loadDevices();
  }

  onSelectPage(pageEvent: PageEvent) {
    const page = pageEvent.pageIndex + 1;
    if (this.currentPage === page) return;
    this.currentPage = page;
    this.loadDevices();
  }

  private loadDevices() {
    this.devicesApi.getDevices(this.currentPage).subscribe((response: DevicesResponse) => {
      this.devices = response.data.metering_devices.data;
      this.devicesTotal = response.data.metering_devices.total;
    });
  }
}
