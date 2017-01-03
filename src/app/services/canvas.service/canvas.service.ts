import * as _ from 'lodash';
//import * as colorsys from 'colorsys';
//import * as color from 'color';

var Color = require("color")

interface mouseInterface {
  previousX: number;
  previousY: number;
}


import {Injectable} from '@angular/core';

@Injectable()
export class CanvasService {


  context: CanvasRenderingContext2D;
  canvas: any = null;
  layers: any = {};
  colors: any = [{
      name: "ignite orange",
      hex: "#e74d3f"
    },
    {
      name: "ignite blue",
      hex: "#00aced"
    }
  ];

  init(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = canvas.getContext("2d");

  }



generateColor(){
  var random_brightness = _.random(20, 90)/100
  var random_color = _.random(0, this.colors.length-1)
  var random_darkness = _.random(0, 60)/100;
  var random_lighten = _.random(0, 60)/100;

  var color = Color(this.colors[random_color].hex).darken(random_darkness).lighten(random_lighten).hexString();
  return color;

}
  addLayers(clients) {
    clients.map(client => {
      this.layers[client.id] = {
        previousX: window.innerWidth/2, //start in X center
        previousY: window.innerHeight/2, //start in Y center
        color:this.generateColor(),
        ip:client.ip,
        lineWidth:  _.random(3, 20)
      }

    });
    return this.layers;
  }




}
