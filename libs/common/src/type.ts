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
  pool_snapshot: Pool_Snapshot;
  recommendation: Recommendation;
}

export interface Signal {
  type: string;
  urgency: string;
  alpha_amount: number;
  reason: string;
}

export interface Pool_Snapshot {
  tao_blance: number;
  tao_usdt_balance: number;
  tao_value_usdt: number;
  alpha_balance: number;
  alpha_price_usdt: number;
  alpha_value_usdt: number;
  tusdt_supply: number;
  Ip_value_per_tusdt: number;
  total_liquidity_usdt: number;
}

export interface Recommendation {
  action: string;
  amount: number;
  estmated_impact: Estimated_Impact;
  deadline: number;
}

export interface Estimated_Impact {
  new_alpha_balance: number;
  new_ip_value: number;
  peg_restoration_percent: number;
}