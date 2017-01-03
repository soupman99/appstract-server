import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas.component/canvas.component'

//SERVICES
import { CanvasService } from './services/canvas.service/canvas.service'
import { SocketService } from './del/sockets.service/sockets.service'
//import { routing } from './app.routing';
import { feedReducer } from './del/store/feed/feed.reducer';
import { FeedEffects } from './del/store/feed/feed.effects';
//import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
   // routing,
    FormsModule,
    StoreModule.provideStore({
      feed: feedReducer
    }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    EffectsModule.run(FeedEffects),
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
