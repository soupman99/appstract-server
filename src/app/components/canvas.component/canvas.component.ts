import { Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { CanvasService } from '../../services/canvas.service/canvas.service';
import { SocketService } from "../../services/sockets.service/sockets.service";

import * as _ from 'lodash';


import * as io from 'socket.io-client';

@Component({
  selector: 'canvas-component',
  templateUrl: 'canvas.component.html'
})
export class CanvasComponent implements OnInit {

  private socket;


  context:CanvasRenderingContext2D;
  canvas = null;

  @ViewChild("myCanvas") myCanvas;

  constructor(private canvasService:CanvasService, private socketService:SocketService){
    this.socket = io("http://localhost:4300");

     }
  ngOnInit() {

    this.canvas = this.myCanvas.nativeElement;
    this.canvasService.init(this.canvas);
    this.context = this.canvas.getContext("2d");

    this.attachSocketActions();

    setInterval(this.fadeOut, 100)
  }

  fadeOut = () =>{
    console.log('fading');
    let ctx  = this.context;
    ctx.fillStyle = "rgba(255,255,255,.2)";

    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

  }


  draw(data){
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = this.canvasService.layers[data.id].color;
    this.context.moveTo(this.canvasService.layers[data.id].previousX, this.canvasService.layers[data.id].previousY);
    this.context.lineTo(data.x, data.y);
    this.context.stroke();

    this.canvasService.layers[data.id] = {
      previousX: data.x,
      previousY: data.y
    }

  }

  attachSocketActions(){
    let canvasService = this.canvasService;
    let socket = this.socket;

    this.socket.on('receiveAllClients', (allClients)=>{

      let result = canvasService.addLayers(allClients)
      console.log(result);

    })


    this.socket.on('connect', ()=>{

      console.log('connected');
    })


    this.socket.on('drawMouse', (data)=>{
        this.draw(data)

    })
  }
}
