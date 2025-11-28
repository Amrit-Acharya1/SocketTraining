import { Injectable, OnModuleInit } from '@nestjs/common';
import { BaseBroadcasterGateway } from './base_broadcaster.gateway';
import { Data, Estimated_Impact, Pool_Snapshot, Recommendation, Signal, TusdtBroadcastResponse } from 'lib/common';

@Injectable()
export class BaseBroadcasterService implements OnModuleInit {
  constructor(private gateway: BaseBroadcasterGateway) {}

  signal : Signal = {
    type: 'SELL',
    urgency: 'HIGH',
    alpha_amount: 500000,
    reason: 'Price above peg by more than 1%',
  }

  pool_snapshot: Pool_Snapshot = {
    tao_blance: 1000000,
    tao_usdt_balance: 1020000,
    tao_value_usdt: 1020000,
    alpha_balance: 2000000,
    alpha_price_usdt: 1.5,
    alpha_value_usdt: 3000000,
    tusdt_supply: 1000000,
    Ip_value_per_tusdt: 3.02,
    total_liquidity_usdt: 4020000,
  }

  estimated_impact : Estimated_Impact = {
    new_alpha_balance: 1500000,
    new_ip_value: 2.85,
    peg_restoration_percent: 0.95,
  }

  recommendation : Recommendation = {
    action: 'SELL_ALPHA',
    amount: 500000,
    estmated_impact: this.estimated_impact,
    deadline: Date.now() + 3600000,
  }

  data : Data = {
    tusdt_price: 1.02,
    peg_target: 1.00,
    deviation_percent: 2.0,
    signal: this.signal,
    pool_snapshot: this.pool_snapshot,
    recommendation: this.recommendation,
  }

  
   jsonData: TusdtBroadcastResponse = {
    status: 'success',
    timestamp: Date.now(),
    data: this.data,
  }

  onModuleInit() {
  setInterval(() => {
    this.sendBroadcast(this.jsonData);
  }, 1000);
  }
  sendBroadcast(data: TusdtBroadcastResponse) {
    this.gateway.broadcast('basedata', data);
  }
}
