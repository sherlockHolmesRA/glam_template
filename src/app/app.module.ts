import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { Sec1Component } from './sec1/sec1.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { Sec4Component } from './sec4/sec4.component';
import { Sec5Component } from './sec5/sec5.component';



import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    Sec4Component,
    Sec5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* extra added */
    HttpModule,
    HttpClientModule
  ],
  /* add services */
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
