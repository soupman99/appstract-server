import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { CanvasService } from './canvas.service'


import * as io from 'socket.io-client';

@Component({
  selector: 'canvas-component',
  templateUrl: './canvas.component.html'
})
export class CanvasComponent implements AfterViewInit {

  private socket;

  rectW:number = 100;
  rectH:number = 100;
  rectColor:string = "#FF0000";
  context:CanvasRenderingContext2D;

  @ViewChild("myCanvas") myCanvas;


  constructor(private canvasService:CanvasService){

    //canvasService.init(canvas);

  }
  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.canvasService.init(canvas);
    this.context = canvas.getContext("2d");
    //
    // this.tick();
  }



  attachSocketActions(){
    this.socket.on('connect', function(){
      console.log('connected');
    })
    this.socket.on('news', function(data){
      console.log('news %s', data)
    })
  }
}
