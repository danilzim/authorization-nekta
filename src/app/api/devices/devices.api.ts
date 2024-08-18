import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {DevicesRequest, DevicesResponse} from "./devices.types";
import {Observable} from "rxjs";
import {API_URL} from "../api-url";

@Injectable({providedIn: 'root'})
export class DevicesApi {
  private http = inject(HttpClient);
  private baseApiUrl = API_URL;

  private devicesDefaultRequest: DevicesRequest = {
    last_page: 0,
    sort_field: 'id',
    sort: 'desc',
    search_string: null,
    device_state: 'all',
    is_archived: false,
    paginate: true,
    append_fields: ['active_polling', 'attributes', 'tied_point'],
    per_page: 10,
    page: 1,
  };

  getDevices(page = 1): Observable<DevicesResponse> {
    const request = {...this.devicesDefaultRequest, page};

    return this.http.post<DevicesResponse>(`${this.baseApiUrl}device/metering_devices`, request);
  }
}
