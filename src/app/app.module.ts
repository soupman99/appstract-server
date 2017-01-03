import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';


import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas.component/canvas.component'

//SERVICES
import { CanvasService } from './services/canvas.service/canvas.service'
import { SocketService } from './services/sockets.service/sockets.service'


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    HttpModule
  ],
  providers: [
    CanvasService,
    SocketService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
