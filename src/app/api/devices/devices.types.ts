export interface DevicesRequest {
    last_page: number;
    sort_field: 'id';
    sort: 'asc' | 'desc';
    search_string: string | null;
    device_state: 'all';
    is_archived: boolean;
    paginate: boolean;
    append_fields: ['active_polling', 'attributes', 'tied_point'];
    per_page: number;
    page: number;
  }
  
  export interface DevicesResponse {
    data: {
      metering_devices: {
        data: Device[];
        total: number;
      }
    }
  }
  
  export interface Device {
    id: number;
    name: string;
    last_active: number;
  }
  