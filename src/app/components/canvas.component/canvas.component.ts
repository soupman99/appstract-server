import { Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { CanvasService } from '../../services/canvas.service/canvas.service';
import { SocketService } from "../../services/sockets.service/sockets.service";

import * as _ from 'lodash';
var Color = require("color");

import * as io from 'socket.io-client';

@Component({
  selector: 'canvas-component',
  templateUrl: 'canvas.component.html'
})
export class CanvasComponent implements OnInit {

  private socket;

  backgroundColor = "#161f29";
  context:CanvasRenderingContext2D;
  canvas = null;

  @ViewChild("myCanvas") myCanvas;

  constructor(private canvasService:CanvasService, private socketService:SocketService){
    this.socket = io("http://10.1.160.90:4300");

     }
  ngOnInit() {

    this.canvas = this.myCanvas.nativeElement;
    this.canvasService.init(this.canvas);
    this.context = this.canvas.getContext("2d");

    this.attachSocketActions();

    let ctx  = this.context;
    ctx.fillStyle = this.backgroundColor;

    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //setInterval(this.fadeOut, 100)
  }

  fadeOut = () =>{
    //console.log('fading');
    let ctx  = this.context;
    let background = Color(this.backgroundColor).lighten(0.5);
    ctx.fillStyle = background;
    console.log("fill style %s",ctx.fillStyle);


    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

  }


  draw(data){
    console.info('%s - drawing - socket: %s - color: %s', data.ip, data.id, this.canvasService.layers[data.id].color);
    this.context.lineCap = 'round';
    this.context.lineWidth = this.canvasService.layers[data.id].lineWidth;



    // //shadow
    // this.context.beginPath();
    // let offset = 15;
    // this.context.strokeStyle = '#000';
    // this.context.moveTo(this.canvasService.layers[data.id].previousX+offset, this.canvasService.layers[data.id].previousY+offset);
    // this.context.lineTo(data.x+offset, data.y+offset);
    // this.context.stroke();



    //main line
    this.context.beginPath();
    this.context.strokeStyle = this.canvasService.layers[data.id].color;
    // this.context.shadowColor = '#000';
    // this.context.shadowBlur = 10;
    // this.context.shadowOffsetX = this.context.lineWidth*2;
    // this.context.shadowOffsetY = this.context.lineWidth*2;
    this.context.moveTo(this.canvasService.layers[data.id].previousX, this.canvasService.layers[data.id].previousY);
    this.context.lineTo(data.x, data.y);
    this.context.stroke();


    this.canvasService.layers[data.id].previousX = data.x;
    this.canvasService.layers[data.id].previousY = data.y;

  }

  attachSocketActions(){
    let canvasService = this.canvasService;
    let socket = this.socket;

    this.socket.on('receiveAllClients', (allClients)=>{

      let result = canvasService.addLayers(allClients)

    })


    this.socket.on('connect', ()=>{
      console.log('connected as %s', this.socket.id);
    })



    this.socket.on('drawMouse', (data)=>{
        this.draw(data)

    })
  }
}
