interface mouseInterface {
  previousX: number;
  previousY: number;
}

import {Injectable} from '@angular/core';

@Injectable()
export class CanvasService {

  rectW: number = 100;
  rectH: number = 100;
  rectColor: string = "#FF0000";
  context: CanvasRenderingContext2D;
  canvas: any = null;
  layers: any = {};



  init(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style = 'border:solid 1px red;'
    this.context = canvas.getContext("2d");

   // setTimeout(this.fadeOut, 3000);

  }




  addLayer(layerInfo) {
    this.layers[layerInfo.id] = {
      previousX: 0,
      previousY: 0,
      color:layerInfo.color
    }
    console.log(layerInfo.id);

    return this.layers;
  }


  draw(data) {
    // //console.log(data);
    // // console.log(this.layers)
    // this.context.beginPath();
    // this.context.lineWidth = 5;
    // this.context.strokeStyle = "green"; // Green path
    // this.context.moveTo(this.layers[data.id].previousX, this.layers[data.id].previousY);
    // this.context.lineTo(data.x, data.y);
    // this.context.stroke();
    //
    //
    // this.layers[data.id] = {
    //   previousX: data.x,
    //   previousY: data.y
    // }
  }

}
