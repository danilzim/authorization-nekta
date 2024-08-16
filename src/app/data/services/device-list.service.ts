import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceListService {
  http = inject(HttpClient);
  baseApiUrl: string = 'https://core.nekta.cloud/api/';

  requestPayload = {
    page: 1,
    last_page: 0,
    sort_field: 'id',
    sort: 'desc',
    search_string: null,
    device_state: 'all',
    is_archived: false,
    paginate: true,
    append_fields: ['active_polling', 'attributes', 'tied_point'],
    per_page: 10,
  };

  getDeviceList() {
    return this.http.post(
      `${this.baseApiUrl}device/metering_devices`,
      this.requestPayload
    );
  }
}
