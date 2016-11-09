import {Injectable} from '@angular/core';


@Injectable()
export class CanvasService {

  rectW:number = 100;
  rectH:number = 100;
  rectColor:string = "#FF0000";
  context:CanvasRenderingContext2D;
  canvas:any = null;


  init(canvas){
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style = 'border:solid 1px red;'
    this.context = canvas.getContext("2d");

    this.tick();
  }


  tick() {
    requestAnimationFrame(()=> {
      this.tick()
    });

    var ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(0, 0, this.rectW, this.rectH);
  }

}
