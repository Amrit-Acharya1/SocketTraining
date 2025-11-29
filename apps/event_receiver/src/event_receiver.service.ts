import { Injectable } from "@nestjs/common";
import { ModifiedData, TusdtBroadcastResponse } from "lib/common";
import { EventReceiverGateway } from "./event-receiver.gateway";

@Injectable()
export class EventReceiverService{

    constructor(private eventReceiverGateway:EventReceiverGateway){}

    priorityDefine(urgency:string, deviation_type:boolean):string{
        if(deviation_type){

            if(urgency === 'CRITICAL'){
                return 'high_sell';
            }else if(urgency === 'HIGH'){
                return 'medium_sell';
            }else{
                return 'low_sell';
            }
        }else{
            if(urgency === 'CRITICAL'){
                return 'high_buy';
            }else if(urgency === 'HIGH'){
                return 'medium_buy';
            }else{
                return 'low_buy';
            }
        }

    }
    modifySignal(data:TusdtBroadcastResponse) : ModifiedData{

        const modifiedData:ModifiedData = {
            ...data,
            deviation_type: data.data.deviation_percent>0,
            processed_at: Date.now(),
            should_execute: data.data.signal.urgency === 'CRITICAL' || data.data.signal.urgency === 'HIGH' ? true : false,
            priority: this.priorityDefine(data.data.signal.urgency, data.data.deviation_percent>0),
        }
        return modifiedData;
    }

    broadcastMarkedData(data: TusdtBroadcastResponse){

        const dataModified = this.modifySignal(data);

        this.eventReceiverGateway.broadcastModifiedData('modifiedPrice', dataModified);



    }
}