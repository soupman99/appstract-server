import * as _ from 'lodash';
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

  }




  addLayers(clients) {

    clients.map(client => {

      this.layers[client] = {
        previousX: window.innerWidth/2, //start in X center
        previousY: window.innerHeight/2, //start in Y center
        color:"#"+((1<<24)*Math.random()|0).toString(16),
        //ip:client.ip
      }
    });

    //console.log(JSON.stringify(this.layers));

    return this.layers;
  }




}
