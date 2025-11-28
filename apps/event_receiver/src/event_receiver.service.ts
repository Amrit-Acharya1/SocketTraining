import { Injectable } from "@nestjs/common";
import { TusdtBroadcastResponse } from "lib/common";
import { EventReceiverGateway } from "./event-receiver.gateway";

@Injectable()
export class EventReceiverService{

    constructor(private eventReceiverGateway:EventReceiverGateway){}

    broadcastMarkedData(data: TusdtBroadcastResponse){




    }
}