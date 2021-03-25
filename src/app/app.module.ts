import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
 import { MatIconModule } from '@angular/material/icon';
  import { MatSidenavModule} from '@angular/material/sidenav';
  import { MatListModule} from '@angular/material/list';
   import  {MatButtonModule } from  '@angular/material/button';


   import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
