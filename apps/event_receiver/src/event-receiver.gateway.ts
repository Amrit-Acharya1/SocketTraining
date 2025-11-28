import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
@WebSocketGateway({namespace: 'modified-data',
  cors: { origin: '*' },})
export class EventReceiverGateway {

    @WebSocketServer() server :Server;

    

}