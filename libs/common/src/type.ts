export interface TusdtBroadcastResponse {
  status: string;
  timestamp: number;
  data: Data;
}

export interface Data {
  tusdt_price: number;
  peg_target: number;
  deviation_percent: number;
  signal: Signal;
}

export interface Signal {
  type: string;
  urgency: string;
  alpha
}