export interface Stop {
    stop_id: number;
    stop_code: string | null;
    stop_name: string;
    stop_desc: string | null;
    stop_lat: number;
    stop_lon: number;
  }
  
  export interface StopTime {
    trip_id: number;
    arrival_time?: string;
    departure_time?: string;
    stop_id: number;
    stop_sequence: number;
  }
  
  export interface Trip {
    route_id: number;
    service_id: string;
    trip_id: number;
    trip_headsign?: string;
    trip_short_name?: string;
    direction_id?: string;
    block_id?: string;
    shape_id?: string;
    wheelchair_accessible?: number;
    bikes_allowed?: number;
  }
  
  export interface Route {
    route_id: string;
    agency_id?: string;
    route_short_name?: string;
    route_long_name?: string;
    route_desc?: string;
    route_type?: string;
    route_url?: string;
    route_color?: string;
    route_text_color?: string;
    route_sort_order?: string;
    continuous_pickup?: string;
    continuous_drop_off?: string;
  }
  