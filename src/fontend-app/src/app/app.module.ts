import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainContentComponent } from './main-page/main-content/main-content.component';
import { HeaderComponent } from './main-page/header/header.component';
import { SidebarComponent } from './main-page/sidebar/sidebar.component';
import { FooterComponent } from './main-page/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainContentComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
