import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  observable$: Observable<{}>;
  private socket;
  constructor(http: Http) {



    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());
  }

  ngOnInit(){

    this.socket = io('http://localhost:4300');
    console.log('initing');
    // var socket = io.connect('http://localhost:4300');
    this.socket.on('connect', function(){
      console.log('connected');
    })
  }
}
