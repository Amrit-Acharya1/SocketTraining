import { Injectable, OnModuleInit } from "@nestjs/common";
import { Socket } from "socket.io-client";

@Injectable()
export class EventReceiverClient implements OnModuleInit {

    private socket:Socket;


    onModuleInit() {
        console.log('MiddleReceiverClient initialized, connecting to BaseBroadcaster...');

    }


}