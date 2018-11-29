import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './materil.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import { MainComponent } from './main/main.component';
import { PagefourComponent } from './pagefour/pagefour.component';
@NgModule({
  declarations: [

    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    
    
    MainComponent,
    
    PagefourComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule ,
    FlexLayoutModule,  
      NgxPageScrollModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
