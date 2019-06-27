import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserFoldersComponent } from './user-folders/user-folders.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserFoldersComponent,
    UserMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
