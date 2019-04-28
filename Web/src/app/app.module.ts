import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMessageViewComponent } from './app-message-view/app-message-view.component';
import { AppMessageCreateComponent } from './app-message-create/app-message-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMessageViewComponent,
    AppMessageCreateComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
