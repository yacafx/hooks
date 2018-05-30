import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Libs for trackjs error handler
import { ErrorHandler } from '@angular/core';
import { TrackJsErrorHandler } from './trackjs.handler';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: ErrorHandler, useClass: TrackJsErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule {}
