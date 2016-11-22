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

  rectW: number = 100;
  rectH: number = 100;
  rectColor: string = "#FF0000";
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
    },
    // {
    //   name: "ignite dark blue",
    //   hex: "#161f29"
    // }
  ];



  init(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style = 'border:solid 1px red;'
    this.context = canvas.getContext("2d");

  }



generateColor(){
  //return "rgba(100,47,71,1)"
  var rando_brightness = _.random(20, 90)/100
  var random_color = _.random(0, this.colors.length-1)
  var color = Color(this.colors[random_color].hex).hexString();
  return color;
  //return colorsys.hsv_to_rgb(this.colors[0].h, this.colors[0].s, rando_brightness)
 // return "#"+((1<<24)*Math.random()|0).toString(16);
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
